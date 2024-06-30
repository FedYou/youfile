const JSON5 = require("json5");
const file = require("./file");

/**
 * Returns the contents of the file in an object, uses json5 which allows reading json with comments.
 * @param {string} path - File path.
 * @returns {object}
 */
module.exports = (path) => {
  return JSON5.parse(file(path));
};
