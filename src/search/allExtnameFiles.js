const get = require("../get");
const extnameFiles = require("./extnameFiles");
/**
 * Returns all files in the directory with a specific extension.
 * @param {string} dirPath - Directory path.
 * @param {string} extname - Extension to search.
 * @returns {Array<string>}
 */
module.exports = (dirPath, extname) => {
  const folderList = get.allFolders(dirPath);
  let list = [];
  list.push(...extnameFiles(dirPath, extname));

  folderList.forEach((folderPath) => {
    list.push(...extnameFiles(folderPath, extname));
  });
  return list;
};
