const fs = require('fs')

module.exports = function (pathFile, encoding) {
  if (typeof encoding === 'string') {
    return fs.readFileSync(pathFile, encoding)
  }
  return fs.readFileSync(pathFile)
}
