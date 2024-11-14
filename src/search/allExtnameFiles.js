const get = require("../get");
const extnameFiles = require("./extnameFiles");

module.exports = (dirPath, extname) => {
  const folderList = get.allFolders(dirPath);
  let list = [];
  list.push(...extnameFiles(dirPath, extname));

  folderList.forEach((folderPath) => {
    list.push(...extnameFiles(folderPath, extname));
  });
  return list;
};
