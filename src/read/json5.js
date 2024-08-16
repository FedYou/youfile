const file = require("./file");
const regex = /("([^"\\]|\\.)*"|'([^'\\]|\\.)*'|\/\/.*|\/\*[\s\S]*?\*\/)/g;
/**
 * Returns the contents of the file in an object, allows reading json with comments.
 * @param {string} path - File path.
 * @returns {object}
 */
module.exports = (path) => {
  try {
    let content = file(path);
    if (content.charCodeAt(0) === 0xfeff) {
      content = content.slice(1);
    }

    return JSON.parse(
      content.replace(regex, (match) => {
        if (match.startsWith('"') || match.startsWith("'")) {
          return match;
        }
        return "";
      })
    );
  } catch (error) {
    console.log(path);
    console.log(error);
  }
};
