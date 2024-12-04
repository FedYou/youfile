const file = require('./file')

module.exports = async function (pathFile) {
  return JSON.parse(await file(pathFile))
}
