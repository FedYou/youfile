let fs = require("fs-extra");
let toDir = require("./todir");
let md = require("mkdir");

function copy(path, dest) {
  md.mkdirsSync(toDir(dest));
  fs.copySync(path, dest);
}
module.exports = copy;
