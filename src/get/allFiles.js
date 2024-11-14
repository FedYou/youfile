const allFolders = require("./allFolders");
const files = require("./files");

module.exports = (dirPath) => {
  let list = [];

  list.push(...files(dirPath));

  allFolders(dirPath).forEach((folderPath) => {
    list.push(...files(folderPath));
  });
  return list;
};
