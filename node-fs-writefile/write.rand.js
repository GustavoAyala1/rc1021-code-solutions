const fs = require('fs');

const random = Math.random() * 10;
fs.writeFile('random.txt', `${random}`, err => {
  if (err) throw err;
});
