const fs = require('fs').promises
const path = require('path')

module.exports = async function (dirname) {
  const mode = 0o777 ^ process.umask()

  let current = dirname

  const paths = []
  while (!0) {
    try {
      const stat = await fs.stat(current)
      if (stat.isDirectory()) break
    } catch (error) {
      if (error.code === 'ENOENT') {
        paths.push(current)
        current = path.dirname(current)
      }
    }
  }

  for (const dir of paths.reverse()) {
    await fs.mkdir(dir, { mode })
  }
}
