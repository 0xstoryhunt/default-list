const { version } = require("../package.json");
const core_contracts = require("./constants/core-contract.json");
const periphery_contracts = require("./constants/periphery-contract.json");
const constants = require("./constants/constants.json");

const ChainId = {
  ODYSSEY: 1516,
  STORY: 1514
}

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
    chains: Object.values(ChainId),
    constants: { [ChainId.ODYSSEY]: { ...core_contracts[ChainId.ODYSSEY], ...periphery_contracts[ChainId.ODYSSEY], ...constants[ChainId.ODYSSEY] }, [ChainId.STORY]: { ...core_contracts[ChainId.STORY], ...periphery_contracts[ChainId.STORY], ...constants[ChainId.STORY] } },
  };
};
