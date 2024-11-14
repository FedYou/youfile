const allFolders = require("./allFolders");
const files = require("./files");
/**
 * Return all files in the directory.
 * @param {string} path - Directory path.
 * @returns {Array<string>}
 */
module.exports = (dirPath) => {
  let list = [];

  list.push(...files(dirPath));

  allFolders(dirPath).forEach((folderPath) => {
    list.push(...files(folderPath));
  });
  return list;
};
