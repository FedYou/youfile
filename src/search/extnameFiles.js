const fs = require("fs-extra");
const { join } = require("path");
/**
 * Return all files that are in the same directory with a specified extension.
 * @param {string} path - Directory path.
 * @param {string} extname - Extension to search.
 * @returns {Array<string>}
 */
module.exports = (dirPath, extname) => {
  let list = [];
  for (const content of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (content.isFile() && content.name.endsWith(extname)) {
      list.push(join(dirPath, content.name));
    }
  }
  return list;
};
