const fileSync = require('./fileSync')

module.exports = function (pathFile) {
  return JSON.parse(fileSync(pathFile))
}
