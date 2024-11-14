const fs = require("fs-extra");
const { join } = require("path");
/**
 * Return all folders in the directory.
 * @param {string} dirPath - Directory path.
 * @returns {Array<string>}
 */
module.exports = function get(dirPath) {
  let list = [];
  for (const content of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (content.isDirectory()) {
      list.push(join(dirPath, content.name));
      list.push(...get(join(dirPath, content.name)));
    }
  }
  return list;
};
