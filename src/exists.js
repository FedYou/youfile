const fs = require('fs').promises

module.exports = (path) => {
  return new Promise((resolve, reject) => {
    fs.access(path)
      .then(() => resolve(true))
      .catch(() => resolve(false))
  })
}
