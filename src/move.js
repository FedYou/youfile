const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const { dir, dirSync } = require('./write/dir')

async function move(pathName, dest) {
  await dir(path.dirname(dest), { recursive: true })
  await fsPromises.rename(pathName, dest)
}

function moveSync(pathName, dest) {
  dirSync(path.dirname(dest), { recursive: true })
  fs.renameSync(pathName, dest)
}

module.exports = { move, moveSync }
