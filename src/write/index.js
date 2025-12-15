const { file, fileSync } = require('./file')
const { dir, dirSync } = require('./dir')
const { json, jsonSync } = require('./json')

const Write = {
  file: file,
  dir: dir,
  json: json
}

const WriteSync = {
  file: fileSync,
  dir: dirSync,
  json: jsonSync
}

module.exports = {
  Write,
  WriteSync
}
