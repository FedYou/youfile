const fs = require("fs-extra");
const { join } = require("path");
/**
 * Return all files that are in the same directory with a specified name.
 * @param {string} dirPath - Directory path.
 * @param {string} name - Name to search.
 * @returns {Array<string>}
 */
module.exports = (dirPath, name) => {
  let list = [];
  for (const content of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (content.isFile() && content.name === name) {
      list.push(join(dirPath, content.name));
    }
  }
  return list;
};
