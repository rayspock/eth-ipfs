const IPFSInbox = artifacts.require("./IPFSInbox.sol");
const assert = require("chai").assert;
const truffleAssert = require("truffle-assertions");

contract("IPFSInbox", accounts => {
    // let ipfsInbox;

    // beforeEach(async () => {
    //     ipfsInbox = await IPFSInbox.new();
    // });

    // afterEach(async () => {
    //     await ipfsInbox.kill();
    // });

    it("..should emit an event when you send an IPFS address.", async () => {

        // Wait for the contract to be deployed
        const ipfsInbox = await IPFSInbox.deployed();

        // Call the contract function which sends an IPFS address
        let tx = await ipfsInbox.sendIPFS(accounts[1], "SampleAddress", { from: accounts[0] });

        // Check if the event of ipfsSent has been called 
        truffleAssert.eventEmitted(tx, "ipfsSent", ev => {
            return true;
        });

    });
});