const file = require("./file");

/**
 * Returns the contents of the file as a object.
 * @param {string} path - File path.
 * @returns {object}
 */
module.exports = (path) => {
  return JSON.parse(file(path));
};
