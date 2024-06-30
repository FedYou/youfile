let fs = require("fs-extra");

function remove(path) {
  fs.removeSync(path);
}

module.exports = remove;
