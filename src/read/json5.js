const JSON5 = require("json5");
const file = require("./file");

module.exports = (path) => {
  return JSON5.parse(file(path));
};
