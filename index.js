const get = require('./src/get')
const write = require('./src/write')
const read = require('./src/read')
const remove = require('./src/remove')
const removeSync = require('./src/removeSync')
const removeExists = require('./src/removeExists')
const removeExistsSync = require('./src/removeExistsSync')
const exists = require('./src/exists')
const existsSync = require('./src/existsSync')
const copy = require('./src/copy')
const move = require('./src/move')

/**
 * Manage your files and folders quickly and easily.
 */
module.exports = {
  write,
  read,
  get,
  remove,
  removeSync,
  removeExists,
  removeExistsSync,
  exists,
  existsSync,
  copy,
  move
}
