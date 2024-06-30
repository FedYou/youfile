const fs = require("fs-extra");
const md = require("mkdir");
const toDir = require("../todir");

module.exports = (path, data = "") => {
  md.mkdirsSync(toDir(path));
  fs.writeFileSync(path, data, "utf8");
};
