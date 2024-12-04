const existsSync = require('./existsSync')
const removeSync = require('./removeSync')

module.exports = function (path) {
  if (!existsSync(path)) return
  removeSync(path)
}
