let fs = require("fs-extra");

function remove(src) {
  fs.removeSync(src);
}

module.exports = remove;
