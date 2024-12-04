const fs = require('fs')
const path = require('path')

module.exports = function get (dirname) {
  const list = []
  for (const content of fs.readdirSync(dirname, { withFileTypes: true })) {
    if (content.isDirectory()) {
      const pathFolder = path.join(dirname, content.name)
      list.push(pathFolder)
      list.push(...get(pathFolder))
    }
  }
  return list
}
