const fs = require("fs-extra");
const { join } = require("path");

module.exports = (dirPath, extname) => {
  let list = [];
  for (const content of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (content.isFile() && content.name.endsWith(extname)) {
      list.push(join(dirPath, content.name));
    }
  }
  return list;
};
