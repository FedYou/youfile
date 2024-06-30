const md = require("mkdir");

module.exports = (path) => {
  md.mkdirsSync(path);
};
