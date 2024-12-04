const allFoldersSync = require('./allFoldersSync')
const extFilesSync = require('./extFilesSync')

module.exports = async function (dirname, extname) {
  const list = []
  list.push(...extFilesSync(dirname, extname))

  for (const folderPath of allFoldersSync(dirname)) {
    list.push(...extFilesSync(folderPath))
  }

  return list
}
