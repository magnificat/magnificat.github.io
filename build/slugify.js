var fold = require('fold-to-ascii').fold;
var path = require('path');

module.exports = function (relativePath) {
  return fold(relativePath
    .split(path.sep).pop()
    .toLowerCase()
    .replace(/^\d+\.\s*(?!\/)/, '')
    .replace(/\s+/g, '-')
    .replace(/\s*\.ditty$/, '/index.html')
  );
};
