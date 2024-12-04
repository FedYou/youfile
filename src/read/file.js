const fs = require('fs').promises

module.exports = async function (pathFile, encoding) {
  if (typeof encoding === 'string') {
    return await fs.readFile(pathFile, encoding)
  }
  return await fs.readFile(pathFile)
}
