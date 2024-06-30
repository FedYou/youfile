let fs = require("fs-extra");

/**
 * Deletes files and directories.
 * @param {string} path - Directory or file path.
 * @param {string} dest - Destination path of the directory or file.
 */
function remove(path) {
  fs.removeSync(path);
}

module.exports = remove;
