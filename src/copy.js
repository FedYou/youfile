const fs = require('fs').promises
const path = require('path')
const dir = require('./write/dir')

module.exports = async function (pathName, dest) {
  await dir(path.dirname(dest))

  const stat = await fs.stat(pathName)
  if (stat.isDirectory()) {
    await fs.cp(pathName, dest, { recursive: true })
  } else if (stat.isFile()) {
    await fs.copyFile(pathName, dest)
  } else {
    throw new Error('The path is not a file or directory')
  }
}
