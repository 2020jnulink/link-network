'use strict';


//패브릭 서비스를 가져옴
const FabricCAServices = require('fabric-ca-client');
const { FileSystemWallet, X509WalletMixin } = require('fabric-network');
const fs = require('fs');
//경로를 정규화하는 path모듈
const path = require('path');

const configPath = path.join(process.cwd(), './config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);

var connection_file = config.connection_file;
var appAdmin = config.appAdmin;
var appAdminSecret = config.appAdminSecret;
var orgMSPID = config.orgMSPID;
var caName = config.caName;


// path.join은 운영체제에 따른 구분자를 사용하여 경로를 정규화 시켜서 리턴해준다. (cwd는 Current working Directory)
const ccpPath = path.join(process.cwd(), './connection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);



  

async function main() {
    try {

        // Create a new CA client for interacting with the CA.

        // const caURL = 'https://124b79efa8f544fc940408394edac7b5-ca6365f4.horea-blockchain-32x32xp.us-south.containers.appdomain.cloud:7054';
        const caURL = caName;
        const ca = new FabricCAServices(caURL);

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the admin user.
       
        const adminExists = await wallet.exists(appAdmin);
        if (adminExists) {
            console.log('An identity for the admin user "admin" already exists in the wallet');
            return;
        }
        console.log("ok");
        // Enroll the admin user, and import the new identity into the wallet.
        const enrollment = await ca.enroll({ enrollmentID: appAdmin, enrollmentSecret: appAdminSecret });
        console.log("ok");
        const identity = X509WalletMixin.createIdentity(orgMSPID, enrollment.certificate, enrollment.key.toBytes());
        wallet.import(appAdmin, identity);
        console.log('msg: Successfully enrolled admin user ' + appAdmin + ' and imported it into the wallet');
        console.log("ok");
    } catch (error) {
        console.error(`Failed to enroll admin user ' + ${appAdmin} + : ${error}`);
        process.exit(1);
    }
}

main();