const fs = require("fs-extra");
const md = require("mkdir");
const toDir = require("../todir");

module.exports = (path, data = {}, spaces = 0) => {
  md.mkdirsSync(toDir(path));
  fs.writeFileSync(path, JSON.stringify(data, null, spaces), "utf8");
};
