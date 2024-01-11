let fs = require("fs-extra");
let JSON5 = require("json5");
let path = require("path");

function get(src) {
  let file = fs.readFileSync(src, "utf-8");
  return path.extname(src) == ".json" ? JSON5.parse(file) : file;
}

module.exports = get;
