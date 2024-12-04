const fs = require('fs')

module.exports = function (path) {
  fs.rmSync(path, { recursive: true, force: true })
}
