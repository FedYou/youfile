const fs = require('fs-extra')

/**
 * Returns the contents of the file as a string.
 * @param {string} path - File path.
 * @returns {string}
 */
module.exports = (path) => {
  return fs.readFileSync(path, 'utf8')
}
