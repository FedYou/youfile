const file = require("./file");

module.exports = (path) => {
  return JSON.parse(file(path));
};
