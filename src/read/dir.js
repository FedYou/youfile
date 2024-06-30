const fs = require("fs-extra");
const { join: route } = require("path");

function getFolders(path) {
  let list = [];
  for (const content of fs.readdirSync(path, { withFileTypes: true })) {
    if (content.isDirectory()) {
      list.push(route(path, content.name));
      getFolders(route(path, content.name)).map((e) => list.push(e));
    }
  }
  return list;
}

function getFiles(path) {
  const folderList = getFolders(path);
  let list = [];
  folderList.forEach((e) => {
    for (const content of fs.readdirSync(e, { withFileTypes: true })) {
      if (content.isFile()) {
        list.push(route(e, content.name));
      }
    }
  });
  return list;
}

function getFilesExtname(path, extname) {
  const folderList = getFolders(path);
  let list = [];
  folderList.forEach((e) => {
    for (const content of fs.readdirSync(e, { withFileTypes: true })) {
      if (content.isFile() && content.name.endsWith(extname)) {
        list.push(route(e, content.name));
      }
    }
  });
  return list;
}

module.exports = {
  getFolders,
  getFiles,
  getFilesExtname,
};
