let fs = require("fs-extra");
let toDir = require("./todir");
let md = require("mkdir");

function copy(src, dest) {
  md.mkdirsSync(toDir(dest));
  fs.copySync(src, dest);
}
module.exports = copy;
