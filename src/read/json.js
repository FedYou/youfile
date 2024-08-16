const file = require("./file");

/**
 * Returns the contents of the file as a object.
 * @param {string} path - File path.
 * @returns {object}
 */
module.exports = (path) => {
  let content = file(path);
  if (content.charCodeAt(0) === 0xfeff) {
    content = content.slice(1);
  }
  return JSON.parse(content);
};
