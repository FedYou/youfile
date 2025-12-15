const { file, fileSync } = require('./file')

function validOptions(options) {
  if (options?.spaces && typeof options.spaces !== 'number') {
    throw new Error('Spaces not is number type')
  }
}

function validData(data) {
  if (typeof data !== 'object' && data !== null) {
    throw new Error('Data not is object type')
  }
}

async function json(filePath, data = {}, options) {
  validOptions(options)
  validData(data)

  await file(filePath, JSON.stringify(data, null, options?.spaces ?? 0), 'utf-8')
}

function jsonSync(filePath, data = {}, options) {
  validOptions(options)
  validData(data)

  fileSync(filePath, JSON.stringify(data, null, options?.spaces ?? 0), 'utf-8')
}

module.exports = {
  json,
  jsonSync
}
