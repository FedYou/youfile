const fs = require('fs').promises
const path = require('path')

module.exports = async function (dirname, extname) {
  const list = []
  for (const content of await fs.readdir(dirname, { withFileTypes: true })) {
    if (content.isFile() && content.name.endsWith(extname)) {
      list.push(path.join(dirname, content.name))
    }
  }
  return list
}
