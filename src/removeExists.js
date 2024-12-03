const fs = require('fs-extra')

/**
 * Deletes files and directories if they exist.
 * @param {string} path - Directory or file path.
 */
module.exports = (path) => {
  if (!fs.existsSync(path)) return
  fs.removeSync(path)
}
