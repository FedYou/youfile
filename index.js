const { Search, SearchSync } = require('./src/search')
const { Write, WriteSync } = require('./src/write')
const { Read, ReadSync } = require('./src/read')
const { Sha256, Sha256Sync } = require('./src/sha256')
const { remove, removeSync } = require('./src/remove')
const { exists, existsSync } = require('./src/exists')
const { copy, copySync } = require('./src/copy')
const { move, moveSync } = require('./src/move')

module.exports = {
  Write,
  WriteSync,
  Read,
  ReadSync,
  Search,
  SearchSync,
  Sha256,
  Sha256Sync,
  remove,
  removeSync,
  exists,
  existsSync,
  copy,
  copySync,
  move,
  moveSync
}
