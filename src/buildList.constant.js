const { version } = require("../package.json");
const core_contracts = require("./constants/core-contract.json");
const periphery_contracts = require("./constants/periphery-contract.json");
const graph = require("./constants/graph.json");

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
    logoURI: "https://ipfs.io/ipfs/bafkreicy5wj4ahfeaopdfpduna3yf7klfl6nkum6pg4buwj6cdjmvegilu",
    keywords: ["default", "storyhunt", "constants", "list"],
    constants: {...core_contracts, ...periphery_contracts, ...graph}
  };
};
