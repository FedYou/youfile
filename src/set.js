let fs = require("fs-extra");
let md = require("mkdir");
let toDir = require("./todir");

function file(src, data) {
  let dir = toDir(src);
  md.mkdirsSync(dir);

  if (typeof {} === "object" || typeof [] === "object") {
    data = JSON.stringify(data);
  }
  fs.writeFileSync(src, data);
}
function dir(src) {
  md.mkdirsSync(src);
}

function set(src, data = "") {
  if (data === false) {
    dir(src);
  } else {
    file(src, data);
  }
}

module.exports = set;
