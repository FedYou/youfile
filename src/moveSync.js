const fs = require('fs')
const path = require('path')
const dirSync = require('./write/dirSync')

module.exports = function (pathName, dest) {
  dirSync(path.dirname(dest))
  fs.renameSync(pathName, dest)
}
