const { version } = require("../package.json");

//interfaces
const interfaces = require("./constants/interfaces.json");

//story
const story_core_contracts = require("./constants/story/core-contract.json");
const story_periphery_contracts = require("./constants/story/periphery-contract.json");
const story_constants = require("./constants/story/constants.json");

//aeneid
const aeneid_core_contracts = require("./constants/aeneid/core-contract.json");
const aeneid_periphery_contracts = require("./constants/aeneid/periphery-contract.json");
const aeneid_constants = require("./constants/aeneid/constants.json");

const ChainId = {
  STORY: 1514,
  AENEID: 1315,
};


module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "StoryHunt Constants List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://ipfs.io/ipfs/bafkreicy5wj4ahfeaopdfpduna3yf7klfl6nkum6pg4buwj6cdjmvegilu",
    keywords: ["default", "storyhunt", "constants", "list"],
    chains: Object.values(ChainId),
    constants: {
      interfaces,
      [ChainId.STORY]: {...story_constants, ...story_core_contracts, ...story_periphery_contracts},
      [ChainId.AENEID]: {...aeneid_constants, ...aeneid_core_contracts, ...aeneid_periphery_contracts}
    },
  };
};
