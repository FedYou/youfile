const { file, fileSync } = require('./file')
const regex = /("([^"\\]|\\.)*"|'([^'\\]|\\.)*'|\/\/.*|\/\*[\s\S]*?\*\/)/g

async function json5(filePath) {
  try {
    let content = await file(filePath, 'utf-8')
    if (content.charCodeAt(0) === 0xfeff) {
      content = content.slice(1)
    }

    return await JSON.parse(
      content.replace(regex, (match) => {
        if (match.startsWith('"') || match.startsWith("'")) {
          return match
        }
        return ''
      })
    )
  } catch (error) {
    console.log('File Path:', filePath)
    console.log(error)
    process.exit(1)
  }
}

function json5Sync(filePath) {
  try {
    let content = fileSync(filePath, 'utf-8')
    if (content.charCodeAt(0) === 0xfeff) {
      content = content.slice(1)
    }

    return JSON.parse(
      content.replace(regex, (match) => {
        if (match.startsWith('"') || match.startsWith("'")) {
          return match
        }
        return ''
      })
    )
  } catch (error) {
    console.log('File Path:', filePath)
    console.log(error)
    process.exit(1)
  }
}

async function json(pathFile, options) {
  if (options?.comments === true) {
    return await json5(pathFile)
  }
  return JSON.parse(await file(pathFile, 'utf-8'))
}

function jsonSync(pathFile, options) {
  if (options?.comments === true) {
    return json5Sync(pathFile)
  }
  return JSON.parse(fileSync(pathFile, 'utf-8'))
}

module.exports = {
  json,
  jsonSync
}
