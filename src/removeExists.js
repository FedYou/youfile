const exists = require('./exists')
const remove = require('./remove')

module.exports = async function (path) {
  if (!(await exists(path))) return
  await remove(path)
}
