const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const { dir, dirSync } = require('./write/dir')

async function copy(pathName, dest) {
  await dir(path.dirname(dest), { recursive: true })

  const stat = await fsPromises.stat(pathName)

  if (stat.isDirectory()) {
    await fsPromises.cp(pathName, dest, { recursive: true })
    return
  }

  if (stat.isFile()) {
    await fsPromises.copyFile(pathName, dest)
    return
  }

  throw new Error('The path is not a file or directory')
}

function copySync(pathName, dest) {
  dirSync(path.dirname(dest), { recursive: true })

  const stat = fs.statSync(pathName)

  if (stat.isDirectory()) {
    fs.cpSync(pathName, dest, { recursive: true })
    return
  }

  if (stat.isFile()) {
    fs.copyFileSync(pathName, dest)
    return
  }
  throw new Error('The path is not a file or directory')
}

module.exports = { copy, copySync }
