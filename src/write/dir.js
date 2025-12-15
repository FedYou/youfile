const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const mode = 0o777 ^ process.umask()

async function dir(_path, options) {
  if (options?.recursive !== true) {
    await fsPromises.mkdir(_path, { mode })
    return
  }

  let current = _path

  const paths = []
  while (true) {
    try {
      const stat = await fsPromises.stat(current)
      if (stat.isDirectory()) break
    } catch (error) {
      if (error.code === 'ENOENT') {
        paths.push(current)
        current = path.dirname(current)
      }
    }
  }

  for (const pathDir of paths.reverse()) {
    await fsPromises.mkdir(pathDir, { mode })
  }
}

function dirSync(_path) {
  if (options?.recursive !== true) {
    fs.mkdirSync(_path, { mode })
    return
  }

  let current = _path

  const paths = []
  while (true) {
    try {
      const stat = fs.statSync(current)
      if (stat.isDirectory()) break
    } catch (error) {
      if (error.code === 'ENOENT') {
        paths.push(current)
        current = path.dirname(current)
      }
    }
  }

  for (const dir of paths.reverse()) {
    fs.mkdirSync(dir, { mode })
  }
}

module.exports = {
  dir,
  dirSync
}
