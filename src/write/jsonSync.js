const fileSync = require('./fileSync')

module.exports = function (filePath, data = {}, spaces = 0) {
  if (typeof spaces !== 'number') {
    throw new Error('The spaces not is number type')
  }
  if (typeof data !== 'object') {
    throw new Error('The data not is object type')
  }

  fileSync(filePath, JSON.stringify(data, null, spaces), 'utf-8')
}
