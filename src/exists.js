const fs = require('fs')
const fsPromises = require('fs').promises

function exists(path) {
  return new Promise((resolve, reject) => {
    fsPromises
      .access(path)
      .then(() => resolve(true))
      .catch(() => resolve(false))
  })
}

function existsSync(path) {
  try {
    fs.accessSync(path)
    return true
  } catch {
    return false
  }
}

module.exports = { exists, existsSync }
