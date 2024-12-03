const allFolders = require('./allFolders')
const files = require('./files')
/**
 * Return all files in the directory.
 * @param {string} dirPath - Directory path.
 * @returns {Array<string>}
 */
module.exports = (dirPath) => {
  const list = []

  list.push(...files(dirPath))

  allFolders(dirPath).forEach((folderPath) => {
    list.push(...files(folderPath))
  })
  return list
}
