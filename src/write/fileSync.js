const fs = require('fs')
const path = require('path')
const dirSync = require('./dirSync')

module.exports = function (filePath, data = '', encoding) {
  dirSync(path.dirname(filePath))

  if (typeof encoding === 'string') {
    fs.writeFileSync(filePath, data, encoding)
    return
  }

  fs.writeFileSync(filePath, data)
}
