require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift radar office come grace ghost army gift'; 
let testAccounts = [
"0xe661e212442973c2946bdcab5ecb9f1835cc4330aa402c7d416f213ad1490976",
"0xd9213c042e4c4f59a1e5636b8c81d5a43a845acd474d1a245de1dc380d3b58a6",
"0x86f4fa267f12f974f0d448d340556b7aab9e483c966d3e21740a2d36643900d5",
"0x680ff9a7bb08fc5834237ce012bf4a758b019bf5baf5d2a47604ec1ba414f106",
"0xe44a806fba055b9f2dad8781c21dc566c24fdb608ca084ec3e4b201e46b487d8",
"0x271ddf4618ea1bc72be8748b7f14bdbb7dd405cc8f5f38a4bf91e8e65b0cea43",
"0x23eb18a019cdf35bc1e4dad69e9db2c319181f47e2533ca5528b3c921213370f",
"0x58d77bfd76367743f27cd94766335cb03c9cb82f0b504522faa6555d59aacbe3",
"0x6dcc47f36a1c1d3305f44bc85bec6f1a3eaac553b19332b620687444d7c32321",
"0x6aace08f6106827f3a401dea75941c7f8896ce16f890d015bc5154e29e71a2c5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


