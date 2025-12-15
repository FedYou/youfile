const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const { dir, dirSync } = require('./dir')

function getEncoding(encoding) {
  if (typeof encoding === 'string') {
    return encoding
  }
  return undefined
}

async function file(filePath, data, options) {
  await dir(path.dirname(filePath), { recursive: true })

  await fsPromises.writeFile(filePath, data, getEncoding(options?.encoding))
}

function fileSync(filePath, data, options) {
  dirSync(path.dirname(filePath), { recursive: true })

  fs.writeFileSync(filePath, data, getEncoding(options?.encoding))
}

module.exports = {
  file,
  fileSync
}
