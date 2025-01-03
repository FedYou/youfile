const fs = require('fs').promises
const path = require('path')

module.exports = async function (dirname) {
  const list = []
  for (const content of await fs.readdir(dirname, { withFileTypes: true })) {
    if (content.isDirectory()) {
      list.push(path.join(dirname, content.name))
    }
  }
  return list
}
