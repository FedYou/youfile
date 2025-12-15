const fs = require('fs')
const fsPromises = require('fs').promises
const { exists, existsSync } = require('./exists')

async function remove(path, options) {
  if (options?.exists === true) {
    if (!(await exists(path))) return
    await fsPromises.rm(path, { recursive: true, force: true })
    return
  }
  await fsPromises.rm(path, { recursive: true, force: true })
}

function removeSync(path, options) {
  if (options?.exists === true) {
    if (!existsSync(path)) return
    fs.rmSync(path, { recursive: true, force: true })
    return
  }
  fs.rmSync(path, { recursive: true, force: true })
}

module.exports = {
  remove,
  removeSync
}
