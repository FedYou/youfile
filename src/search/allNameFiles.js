const get = require("../get");
const nameFiles = require("./nameFiles");
/**
 * Returns all files in the directory with a specific name.
 * @param {string} path - Directory path.
 * @param {string} name - Name to search.
 * @returns {Array<string>}
 */
module.exports = (dirPath, name) => {
  const folderList = get.allFolders(dirPath);
  let list = [];
  list.push(...nameFiles(dirPath, name));

  folderList.forEach((folderPath) => {
    list.push(...nameFiles(folderPath, name));
  });
  return list;
};
