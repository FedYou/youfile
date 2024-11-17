const fs = require("fs-extra");

module.exports = (path) => {
  if (!fs.existsSync(path)) return;
  fs.removeSync(path);
};
