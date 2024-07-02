const fs = require("fs-extra");
const { join: route } = require("path");

/**
 * Return all folders in the directory.
 * @param {string} path - Directory path.
 * @returns {Array<string>}
 */
function getAllFolders(path) {
  let list = [];
  for (const content of fs.readdirSync(path, { withFileTypes: true })) {
    if (content.isDirectory()) {
      list.push(route(path, content.name));
      getAllFolders(route(path, content.name)).map((e) => list.push(e));
    }
  }
  return list;
}

/**
 * Returns all folders that are in the same directory.
 * @param {string} path - Directory path.
 * @returns {Array<string>}
 */
function getFolders(path) {
  let list = [];
  for (const content of fs.readdirSync(path, { withFileTypes: true })) {
    if (content.isDirectory()) {
      list.push(route(path, content.name));
    }
  }
  return list;
}
/**
 * Return all files in the directory.
 * @param {string} path - Directory path.
 * @returns {Array<string>}
 */
function getAllFiles(path) {
  const folderList = getAllFolders(path);
  let list = [];
  getFiles(path).map((r) => list.push(route(r)));
  folderList.forEach((e) => {
    getFiles(e).map((r) => list.push(route(r)));
  });
  return list;
}
/**
 * Returns all files that are in the same directory..
 * @param {string} path - Directory path.
 * @returns {Array<string>}
 */
function getFiles(path) {
  let list = [];
  for (const content of fs.readdirSync(path, { withFileTypes: true })) {
    if (content.isFile()) {
      list.push(route(path, content.name));
    }
  }
  return list;
}
/**
 * Returns all files in the directory with a specific extension.
 * @param {string} path - Directory path.
 * @param {string} extname - Extension to search.
 * @returns {Array<string>}
 */

function getAllExtnameFiles(path, extname) {
  const folderList = getAllFolders(path);
  let list = [];
  getExtnameFiles(path, extname).map((r) => list.push(route(r)));
  folderList.forEach((e) => {
    getExtnameFiles(e, extname).map((r) => list.push(route(r)));
  });
  return list;
}
/**
 * Return all files that are in the same directory with a specified extension.
 * @param {string} path - Directory path.
 * @param {string} extname - Extension to search.
 * @returns {Array<string>}
 */
function getExtnameFiles(path, extname) {
  let list = [];
  for (const content of fs.readdirSync(path, { withFileTypes: true })) {
    if (content.isFile() && content.name.endsWith(extname)) {
      list.push(route(path, content.name));
    }
  }
  return list;
}
module.exports = {
  getAllFolders,
  getAllFiles,
  getAllExtnameFiles,
  getFolders,
  getFiles,
  getExtnameFiles,
};
