let fs = require("fs-extra");
let toDir = require("./todir");
let md = require("mkdir");

function move(src, dest) {
  md.mkdirsSync(toDir(dest));
  fs.moveSync(src, dest);
}
module.exports = move;
