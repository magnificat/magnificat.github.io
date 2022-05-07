var fold = require("fold-to-ascii").fold;
var path = require("path");

module.exports = function (relativePath) {
  return fold(
    relativePath
      .split(path.sep)
      .pop()
      .toLowerCase()
      .replace(/^\d+\.\s*(?!\/)/, "")
      .replace(/,/g, "")
      .replace(/\s+/g, "-")
      .replace(/[\-–—(),.!]+/g, "-")
      .replace(/\s*\.ditty$/, "/index.html")
  );
};
