const fs = require('fs');

fs.copyFile('./dist/dotsy.es2017-esm.js', './dist/dotsy.es2017.mjs', (err) => {
  if (err) throw err;
});

fs.copyFile('./dist/dotsy.es2017-esm.min.js', './dist/dotsy.es2017.min.mjs', (err) => {
  if (err) throw err;
});
