const { Search, SearchSync } = require('./src/search')
const { Write, WriteSync } = require('./src/write')
const { Read, ReadSync } = require('./src/read')
const { Sha256, Sha256Sync } = require('./src/sha256')
const remove = require('./src/remove')
const removeSync = require('./src/removeSync')
const removeExists = require('./src/removeExists')
const removeExistsSync = require('./src/removeExistsSync')
const exists = require('./src/exists')
const existsSync = require('./src/existsSync')
const copy = require('./src/copy')
const copySync = require('./src/copySync')
const move = require('./src/move')
const moveSync = require('./src/moveSync')

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
  removeExists,
  removeExistsSync,
  exists,
  existsSync,
  copy,
  copySync,
  move,
  moveSync
}
