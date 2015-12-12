const slugify = require('./build/slugify');

module.exports = (doc) => (
  `<a href="${slugify(doc.data)}">${doc.data}</a>\n\n`
);
