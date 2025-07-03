const { version } = require("../package.json");
const story = require("./tokens/story.json");
const aeneid = require("./tokens/aeneid.json");

const ChainId = {
  STORY: 1514,
  AENEID: 1315,
};

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "StoryHunt Default List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://ipfs.io/ipfs/bafkreicy5wj4ahfeaopdfpduna3yf7klfl6nkum6pg4buwj6cdjmvegilu",
    keywords: ["default", "storyhunt", "token", "list"],
    tokens: {
      [ChainId.STORY]: story.sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.address.toLowerCase() < t2.address.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
      [ChainId.AENEID]: aeneid.sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.address.toLowerCase() < t2.address.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
    }
  };
};
