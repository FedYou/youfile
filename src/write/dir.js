const md = require("mkdir");

/**
 * Create a directory.
 * @param {string} path - Directory path.
 */
module.exports = (path) => {
  md.mkdirsSync(path);
};
