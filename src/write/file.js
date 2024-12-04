const fs = require('fs').promises
const path = require('path')
const dir = require('./dir')

module.exports = async function (filePath, data = '', encoding) {
  await dir(path.dirname(filePath))

  if (typeof encoding === 'string') {
    await fs.writeFile(filePath, data, encoding)
    return
  }

  await fs.writeFile(filePath, data)
}
