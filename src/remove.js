const fs = require('fs').promises

module.exports = async function (path) {
  await fs.rm(path, { recursive: true, force: true })
}
