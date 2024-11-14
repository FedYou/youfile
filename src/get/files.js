const fs = require("fs-extra");
const { join } = require("path");
/**
 * Returns all files that are in the same directory.
 * @param {string} path - Directory path.
 * @returns {Array<string>}
 */
module.exports = (dirPath) => {
  let list = [];
  for (const content of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (content.isFile()) {
      list.push(join(dirPath, content.name));
    }
  }
  return list;
};
