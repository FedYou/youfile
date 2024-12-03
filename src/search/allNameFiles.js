const get = require('../get')
const nameFiles = require('./nameFiles')
/**
 * Returns all files in the directory with a specific name.
 * @param {string} dirPath - Directory path.
 * @param {string} name - Name to search.
 * @returns {Array<string>}
 */
module.exports = (dirPath, name) => {
  const folderList = get.allFolders(dirPath)
  const list = []
  list.push(...nameFiles(dirPath, name))

  folderList.forEach((folderPath) => {
    list.push(...nameFiles(folderPath, name))
  })
  return list
}
