const fs = require('fs');

fs.readFile('dijkstra.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit();
  }
  console.log(data);
});
