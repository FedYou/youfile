const allFoldersSync = require('./allFoldersSync')
const filesSync = require('./filesSync')

module.exports = function (dirname) {
  const list = []

  list.push(...filesSync(dirname))

  for (const folderPath of allFoldersSync(dirname)) {
    list.push(...filesSync(folderPath))
  }

  return list
}
