const file = require('./file')
const regex = /("([^"\\]|\\.)*"|'([^'\\]|\\.)*'|\/\/.*|\/\*[\s\S]*?\*\/)/g

module.exports = async function (filePath) {
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
