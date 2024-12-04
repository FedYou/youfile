const fs = require('fs')
const path = require('path')

module.exports = (dirname) => {
  const list = []
  for (const content of fs.readdirSync(dirname, { withFileTypes: true })) {
    if (content.isFile()) {
      list.push(path.join(dirname, content.name))
    }
  }
  return list
}
