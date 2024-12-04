const fs = require('fs')
const path = require('path')

module.exports = function (dirname) {
  const mode = 0o777 ^ process.umask()

  let current = dirname

  const paths = []
  while (!0) {
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
