let fs = require("fs-extra");
let toDir = require("./todir");
let md = require("mkdir");

function move(path, dest) {
  md.mkdirsSync(toDir(dest));
  fs.moveSync(path, dest);
}
module.exports = move;
