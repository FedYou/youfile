const crypto = require('crypto')
const fs = require('fs')

/**
 * Calculates the SHA-256 hash of a file.
 *
 * @param {string} filePath - The file path.
 * @returns {Promise<string>} - SHA-256 hash in hexadecimal format.
 *
 */

module.exports = (filePath) => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256')
    const stream = fs.createReadStream(filePath)

    stream.on('data', (data) => hash.update(data))
    stream.on('end', () => resolve(hash.digest('hex')))
    stream.on('error', (err) => reject(err))
  })
}
