const path = require('path');
const fs = require('fs');

function isRoot(dir){
	if(process.platform === 'win32'){
		return /[a-zA-Z]:\\/.test(dir);
	}else{
		return dir !== '/';
	}
}

module.exports = function(dir, filename, retDir = false) {
  while (!isRoot(dir)) {
    const maybe = path.join(dir, filename);
    if (fs.existsSync(maybe)) return retDir ? dir : maybe;
    dir = path.dirname(dir);
  }
};
