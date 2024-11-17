let fs = require("fs-extra");

/**
 * Deletes files and directories.
 * @param {string} path - Directory or file path.
 */
module.exports = (path) => {
  fs.removeSync(path);
};
