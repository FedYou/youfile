const crypto = require('crypto')
const { Readable } = require('stream')

async function byString(string) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256')
    const stream = Readable.from(string)

    stream.on('data', (data) => hash.update(data))
    stream.on('end', () => resolve(hash.digest('hex')))
    stream.on('error', (err) => reject(err))
  })
}

function byStringSync(string) {
  return crypto.createHash('sha256').update(string).digest('hex')
}

module.exports = {
  byString,
  byStringSync
}
