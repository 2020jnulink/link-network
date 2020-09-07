'use strict';

const FabricCAServices = require('fabric-ca-client');
const { FileSystemWallet, X509WalletMixin } = require('fabric-network');
const fs = require('fs');
const path = require('path');

const ccpPath = path.resolve(__dirname, '..', './blockchain/connection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

console.log(ccp.certificateAuthorities['insurance-ca']);

async function main() {
    try {

        const caInfo = ccp.certificateAuthorities['insurance-ca'];
        const caTLSCACerts = caInfo.tlsCACerts.pem;
        console.log("ok");
        const ca = new FabricCAServices(caInfo.url, { trustedRoots: caTLSCACerts, verify: false }, caInfo.caName);

        const walletPath = path.join(process.cwd(), '..', 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        const adminExists = await wallet.exists('insuranceApp-admin');

        if (adminExists) {
            console.log('An identity for the admin user "admin" already exists in the wallet');
            return;
        }
        console.log("ok");
        const enrollment = await ca.enroll({ enrollmentID: 'insuranceApp-admin', enrollmentSecret: 'insuranceApp-adminpw' });
        console.log("ok");
        const identity = X509WalletMixin.createIdentity('insurancemsp', enrollment.certificate, enrollment.key.toBytes());
        await wallet.import('admin', identity);
        console.log('Successfully enrolled admin user "admin" and imported it into the wallet');

    } catch (error) {
        console.error(`Failed to enroll admin user "admin": ${error}`);
        process.exit(1);
    }
}

main();
