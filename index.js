const path = require('path');
const fs = require('fs');
const process = require('process');

const isRootDirectory = (dir) => {
  if (process.platform === 'win32') {
    return /[a-zA-Z]:\\/.test(dir);
  } else {
	  return dir === '/';
  }
};

const findDominantFile = (dir, filename, retDir = false) => {
  while (!isRootDirectory(dir)) {
    const maybe = path.join(dir, filename);
    if (fs.existsSync(maybe)) return retDir ? dir : maybe;
    dir = path.dirname(dir);
  }
};

module.exports = findDominantFile;
