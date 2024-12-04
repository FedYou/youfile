const fs = require('fs')
const path = require('path')
const dirSync = require('./write/dirSync')

module.exports = function (pathName, dest) {
  dirSync(path.dirname(dest))

  const stat = fs.statSync(pathName)
  if (stat.isDirectory()) {
    fs.cpSync(pathName, dest, { recursive: true })
  } else if (stat.isFile()) {
    fs.copyFileSync(pathName, dest)
  } else {
    throw new Error('The path is not a file or directory')
  }
}
