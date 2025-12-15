const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

async function dirsNoRecursive(_path) {
  const list = []
  for (const content of await fsPromises.readdir(_path, { withFileTypes: true })) {
    if (content.isDirectory()) {
      list.push(path.join(_path, content.name))
    }
  }
  return list
}

async function dirsRecursive(_path) {
  const list = []
  for (const content of await fsPromises.readdir(_path, { withFileTypes: true })) {
    if (content.isDirectory()) {
      list.push(path.join(_path, content.name))
      list.push(...(await dirsRecursive(path.join(_path, content.name))))
    }
  }
  return list
}

async function dirs(path, options) {
  if (options?.recursive === true) {
    return await dirsRecursive(path)
  }
  return await dirsNoRecursive(path)
}

function dirsSyncNoRecursive(_path) {
  const list = []
  for (const content of fs.readdirSync(_path, { withFileTypes: true })) {
    if (content.isDirectory()) {
      list.push(path.join(_path, content.name))
    }
  }
  return list
}

function dirsSyncRecursive(_path) {
  const list = []
  for (const content of fs.readdirSync(_path, { withFileTypes: true })) {
    if (content.isDirectory()) {
      list.push(path.join(_path, content.name))
      list.push(...dirsSyncRecursive(path.join(_path, content.name)))
    }
  }
  return list
}

function dirsSync(path, options) {
  if (options?.recursive === true) {
    return dirsSyncRecursive(path)
  }
  return dirsSyncNoRecursive(path)
}

module.exports = { dirs, dirsSync }
