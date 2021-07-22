/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0xa41b2831520d9f97ae189d05dd43ec93c5b3a691a96895bfa19e6805244b0c80","balance":"1000000000000000000000"},{"privateKey":"0x69e40f482aceb40fc1da66805739609ea9bc316828e1c236b14d3dbbb81b4029","balance":"1000000000000000000000"},{"privateKey":"0x73ee152cbd116c5725094d7be8fb7618b83bb7fed5097a63c847d0041f2d849e","balance":"1000000000000000000000"},{"privateKey":"0xcaa94340c9994d283295cdeb21e085fb069faf24f1895cb1464fc5b902cd9dfa","balance":"1000000000000000000000"},{"privateKey":"0x5a8eecbc104f7a0ca1b545ab5101fb50688c3ead9ad189940e07b0d624f455b5","balance":"1000000000000000000000"},{"privateKey":"0x6addcc3a4c57bef11cdd1f595e9d10e75ab991f01eed7877f012b422a78cfebd","balance":"1000000000000000000000"},{"privateKey":"0xb7416423041e8f44d2412706995815f3c1633baa50e66cbd5ee20df85643cc2f","balance":"1000000000000000000000"},{"privateKey":"0x26500db8d592b869d633821da8e8266a1c19fe539244100acac1571d7ecc3fa9","balance":"1000000000000000000000"},{"privateKey":"0x21035e211804c0ddc7764604f57fbd1083aae97f86a1989cb11a2a453f5d0ee7","balance":"1000000000000000000000"},{"privateKey":"0x2b7434f87b25322b85d6efd66c87acb308221d0fead7dec570592aea9ebbd6d5","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};