const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

async function filesNoRecursive(_path, options) {
  const list = []
  for (const content of await fsPromises.readdir(_path, { withFileTypes: true })) {
    if (!content.isFile()) continue

    if (options?.extname) {
      if (content.name.endsWith(options.extname)) {
        list.push(path.join(_path, content.name))
      }
      continue
    }

    list.push(path.join(_path, content.name))
  }
  return list
}

async function filesRecursive(_path, options) {
  const list = []
  for (const content of await fsPromises.readdir(_path, { withFileTypes: true })) {
    if (content.isDirectory()) {
      list.push(...(await filesRecursive(path.join(_path, content.name), options)))
      continue
    }

    if (!content.isFile()) continue

    if (options?.extname) {
      if (content.name.endsWith(options.extname)) {
        list.push(path.join(_path, content.name))
      }
      continue
    }

    list.push(path.join(_path, content.name))
  }
  return list
}

async function files(path, options) {
  if (options?.recursive === true) {
    return await filesRecursive(path, options)
  }
  return await filesNoRecursive(path, options)
}

function filesSyncNoRecursive(_path, options) {
  const list = []
  for (const content of fs.readdirSync(_path, { withFileTypes: true })) {
    if (!content.isFile()) continue

    if (options?.extname) {
      if (content.name.endsWith(options.extname)) {
        list.push(path.join(_path, content.name))
      }
      continue
    }

    list.push(path.join(_path, content.name))
  }
  return list
}

function filesSyncRecursive(_path, options) {
  const list = []
  for (const content of fs.readdirSync(_path, { withFileTypes: true })) {
    if (content.isDirectory()) {
      list.push(...filesSyncRecursive(path.join(_path, content.name), options))
      continue
    }

    if (!content.isFile()) continue

    if (options?.extname) {
      if (content.name.endsWith(options.extname)) {
        list.push(path.join(_path, content.name))
      }
      continue
    }

    list.push(path.join(_path, content.name))
  }
  return list
}

function filesSync(path, options) {
  if (options?.recursive === true) {
    return filesSyncRecursive(path, options)
  }
  return filesSyncNoRecursive(path, options)
}

module.exports = { files, filesSync }
