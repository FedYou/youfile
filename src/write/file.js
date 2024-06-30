const fs = require("fs-extra");
const md = require("mkdir");
const toDir = require("../todir");

/**
 * Create a file.
 * @param {string} path - File path.
 * @param {string} data - File contents.
 */
module.exports = (path, data = "") => {
  md.mkdirsSync(toDir(path));
  fs.writeFileSync(path, data, "utf8");
};
