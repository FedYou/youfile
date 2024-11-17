let fs = require("fs-extra");
let toDir = require("./todir");
let md = require("mkdir");

/**
 * Copy files and directories.
 * @param {string} path - Directory or file path.
 * @param {string} dest - Destination path of the directory or file.
 */
module.exports = (path, dest) => {
  md.mkdirsSync(toDir(dest));
  fs.copySync(path, dest);
};
