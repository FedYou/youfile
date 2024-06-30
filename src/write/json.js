const fs = require("fs-extra");
const md = require("mkdir");
const toDir = require("../todir");

/**
 * Create a file.
 * @param {string} path - File path.
 * @param {object} data - File contents.
 * @param {number} spaces - Number of formatting spaces in the json file, default is 0.
 */
module.exports = (path, data = {}, spaces = 0) => {
  md.mkdirsSync(toDir(path));
  fs.writeFileSync(path, JSON.stringify(data, null, spaces), "utf8");
};
