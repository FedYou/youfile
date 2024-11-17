const fs = require("fs-extra");

/**
 * Checks if a file or directory exists.
 * @param {string} path - Directory or file path.
 * @returns {boolean} True if the file or directory exists, false otherwise.
 */
module.exports = (path) => {
  return fs.existsSync(path);
};
