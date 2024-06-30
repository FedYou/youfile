let remove = require("./src/remove");
let copy = require("./src/copy");
let move = require("./src/move");

/**
 * Manage your files and folders quickly and easily.
 */
module.exports = {
  write: {
    dir: require("./src/write/dir"),
    file: require("./src/write/file"),
    json: require("./src/write/json"),
  },
  read: {
    dir: require("./src/read/dir"),
    file: require("./src/read/file"),
    json: require("./src/read/json"),
    json5: require("./src/read/json5"),
  },
  remove,
  copy,
  move,
};
