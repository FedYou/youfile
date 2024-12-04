const fs = require('fs').promises
const path = require('path')
const dir = require('./write/dir')

module.exports = async function (pathName, dest) {
  await dir(path.dirname(dest))
  await fs.rename(pathName, dest)
}
