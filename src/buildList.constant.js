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
    contants: [...core_contracts, ...periphery_contracts, ...graph]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if(!t1.address || !t2.address) {
          return 0;
        }
        if (t1.chainId === t2.chainId) {
          return t1.address?.toLowerCase() < t2.address?.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
