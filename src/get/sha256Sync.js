const crypto = require('crypto')
const fs = require('fs')

module.exports = (filePath) => {
  const hash = crypto.createHash('sha256')
  const data = fs.readFileSync(filePath)
  hash.update(data)
  return hash.digest('hex')
}
