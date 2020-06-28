require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remain erosion imitate prison fortune typical'; 
let testAccounts = [
"0x0b2039bff56b464e639de22983a933672d7e890d3b4615d693dbbf95743c74eb",
"0x132607d296e30e71eba01a4683f89581648a2123a7fd95f9cc73e6a7eb69e549",
"0x2929906098778006507240539e1ab92f5bb93812bd4e453ef9fd007fa3327036",
"0xa51628d8d32fb8cdd11867615f6736d9620ea1431c224f2f2601e8d31da2df38",
"0xf00f8bc5f2a9d744bce87e66fbc5a7ca92454e19b4c5b308f3bd8f25f5b821dc",
"0x58139f5171667f42e7129a8f816468c9e2d891ed3f5e2341a227c50b7db8121c",
"0xb14870187dbb06a877ac1f876a80562b199a33d998a8ce1baf3703ae951841f4",
"0x9f919cb01af05346e68412f035a3119935e65eb6c6f276474db2f02c12249200",
"0x1fb32bd097480b368576a3be9af85e407d4062bd2b5451b561c57c9fa2f519dc",
"0xe40c51de52e567bf6e46aecb9974da8395d6ca5558baa1c4c09acaa9cb2f93b0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
