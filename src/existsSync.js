const fs = require('fs')

module.exports = (path) => {
  try {
    fs.accessSync(path)
    return true
  } catch {
    return false
  }
}
