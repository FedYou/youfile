const get = require("./src/get");
const search = require("./src/search");
const write = require("./src/write");
const read = require("./src/read");
const remove = require("./src/remove");
const copy = require("./src/copy");
const move = require("./src/move");

/**
 * Manage your files and folders quickly and easily.
 */
module.exports = {
  write,
  read,
  get,
  search,
  remove,
  copy,
  move,
};
