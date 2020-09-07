/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { FileSystemWallet, Gateway, X509WalletMixin } = require('fabric-network');
const fs = require('fs');
const path = require('path');

// capture network variables from config.json
// const configPath = path.join(process.cwd(), './www/blockchain/config.json');
const configPath = path.join(process.cwd(), './config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);
var connection_file = config.connection_file;
var appAdmin = config.appAdmin;
var orgMSPID = config.orgMSPID;
var userName = config.userName;
var gatewayDiscovery = config.gatewayDiscovery;

// const ccpPath = path.join(process.cwd(), './www/blockchain/ibpConnection.json');
const ccpPath = path.join(process.cwd(), './connection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

async function main() {
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);


        //이미 유저가 등록되어 있는 지 확인한다.
        const userExists = await wallet.exists(userName);
        if (userExists) {
            console.log(`An identity for the user ${userName} already exists in the wallet`);
            return;
        }

        // Check to see if we've already enrolled the admin user.
        const adminExists = await wallet.exists(appAdmin);
        if (!adminExists) {
            console.log(`An identity for the admin user ${appAdmin} does not exist in the wallet`);
            console.log('Run the enrollAdmin.js application before retrying');
            return;
        }

        console.log(ccp)

        // Create a new gateway for connecting to our peer node.
        //피어 노드와 연결하기 위한 게이트웨이를 만든다.
        console.log("ok");
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: appAdmin, discovery: gatewayDiscovery });
        console.log("ok");
        // Get the CA client object from the gateway for interacting with the CA.
        const ca = gateway.getClient().getCertificateAuthority();
        const adminIdentity = gateway.getCurrentIdentity();
        console.log(`AdminIdentity: + ${adminIdentity}`);

        // Register the user, enroll the user, and import the new identity into the wallet.
        //유저를 등록하고 명부를 올린다. 그리고 새 신원을 지갑으로 보낸다
        const secret = await ca.register({ affiliation: 'org1', enrollmentID: userName, role: 'client' }, adminIdentity);

        console.log('secret: ')
        console.log(secret)
        const enrollment = await ca.enroll({ enrollmentID: userName, enrollmentSecret: secret });
        const userIdentity = X509WalletMixin.createIdentity(orgMSPID, enrollment.certificate, enrollment.key.toBytes());
        wallet.import(userName, userIdentity);
        console.log('Successfully registered and enrolled admin user ' + userName + ' and imported it into the wallet');

    } catch (error) {
        console.error(`Failed to register user + ${userName} + : ${error}`);
        process.exit(1);
    }
}

main();