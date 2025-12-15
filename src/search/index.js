const { files, filesSync } = require('./files')
const { dirs, dirsSync } = require('./dirs')

const Search = {
  files: files,
  dirs: dirs
}

const SearchSync = {
  files: filesSync,
  dirs: dirsSync
}

module.exports = {
  Search,
  SearchSync
}
