const fs = require('fs').promises
const path = require('path')

module.exports = async function get (dirname) {
  const list = []
  for (const content of await fs.readdir(dirname, { withFileTypes: true })) {
    if (content.isDirectory()) {
      const pathFolder = path.join(dirname, content.name)
      list.push(pathFolder)
      list.push(...(await get(pathFolder)))
    }
  }
  return list
}
