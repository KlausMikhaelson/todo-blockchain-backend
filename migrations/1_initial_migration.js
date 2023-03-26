const todoContract = artifacts.require("todoContract");

module.exports = function (deployer) {
  deployer.deploy(todoContract);
};