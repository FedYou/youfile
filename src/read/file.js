const fs = require('fs')
const fsPromises = require('fs').promises

function getEncoding(encoding) {
  if (typeof encoding === 'string') {
    return encoding
  }
  return undefined
}

async function file(pathFile, options) {
  return await fsPromises.readFile(pathFile, getEncoding(options?.encoding))
}

function fileSync(pathFile, options) {
  return fs.readFileSync(pathFile, getEncoding(options?.encoding))
}

module.exports = {
  file,
  fileSync
}
