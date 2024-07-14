const file = require("./file");
const regex = /("([^"\\]|\\.)*"|'([^'\\]|\\.)*'|\/\/.*|\/\*[\s\S]*?\*\/)/g;
/**
 * Returns the contents of the file in an object, allows reading json with comments.
 * @param {string} path - File path.
 * @returns {object}
 */
module.exports = (path) => {
  return JSON.parse(
    file(path).replace(regex, (match) => {
      if (match.startsWith('"') || match.startsWith("'")) {
        return match;
      }
      return "";
    })
  );
};
