const allFolders = require('./allFolders')
const files = require('./files')

module.exports = async function (dirname) {
  const list = []

  list.push(...(await files(dirname)))

  for (const folderPath of await allFolders(dirname)) {
    list.push(...(await files(folderPath)))
  }

  return list
}
