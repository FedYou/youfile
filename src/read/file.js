const fs = require("fs-extra");

module.exports = (path) => {
  return fs.readFileSync(path, "utf8");
};
