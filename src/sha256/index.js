const { byFile, byFileSync } = require('./byFile')
const { byString, byStringSync } = require('./byString')

const Sha256 = {
  byFile,
  byString
}

const Sha256Sync = {
  byFile: byFileSync,
  byString: byStringSync
}

module.exports = {
  Sha256,
  Sha256Sync
}
