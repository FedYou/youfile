const { file, fileSync } = require('./file')
const { json, jsonSync } = require('./json')

const Read = {
  file: file,
  json: json
}

const ReadSync = {
  file: fileSync,
  json: jsonSync
}

module.exports = {
  Read,
  ReadSync
}
