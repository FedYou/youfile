const fs = require("fs-extra");
const { join: route, extname } = require("path");
/**
 * Return all folders in the directory.
 * @param {string} path - Directory path.
 * @returns {Array<string>}
 */
function getFolders(path) {
  let list = [];
  for (const content of fs.readdirSync(path, { withFileTypes: true })) {
    if (content.isDirectory()) {
      list.push(route(path, content.name));
      getFolders(route(path, content.name)).map((e) => list.push(e));
    }
  }
  return list;
}
/**
 * Return all files in the directory.
 * @param {string} path - Directory path.
 * @returns {Array<string>}
 */

function getFiles(path) {
  const folderList = getFolders(path);
  let list = [];
  folderList.forEach((e) => {
    for (const content of fs.readdirSync(e, { withFileTypes: true })) {
      if (content.isFile()) {
        list.push(route(e, content.name));
      }
    }
  });
  return list;
}
/**
 * Returns all files in the directory with a specific extension.
 * @param {string} path - Directory path.
 * @param {string} extname - Extension to search.
 * @returns {Array<string>}
 */
function getFilesExtname(path, extname) {
  const folderList = getFolders(path);
  let list = [];
  folderList.forEach((e) => {
    for (const content of fs.readdirSync(e, { withFileTypes: true })) {
      if (content.isFile() && content.name.endsWith(extname)) {
        list.push(route(e, content.name));
      }
    }
  });
  return list;
}

module.exports = {
  getFolders,
  getFiles,
  getFilesExtname,
};
