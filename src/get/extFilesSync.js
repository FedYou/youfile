const fs = require('fs')
const path = require('path')

module.exports = function (dirname, extname) {
  const list = []
  for (const content of fs.readdirSync(dirname, { withFileTypes: true })) {
    if (content.isFile() && content.name.endsWith(extname)) {
      list.push(path.join(dirname, content.name))
    }
  }
  return list
}
