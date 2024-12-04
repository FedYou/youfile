const allFolders = require('./allFolders')
const extFiles = require('./extFiles')

module.exports = async function (dirname, extname) {
  const list = []
  list.push(...(await extFiles(dirname, extname)))

  for (const folderPath of await allFolders(dirname)) {
    list.push(...(await extFiles(folderPath)))
  }

  return list
}
