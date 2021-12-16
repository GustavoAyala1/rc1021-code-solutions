const express = require('express');
const path = require('path');

const app = express();

const pubDir = path.join(__dirname, 'public');
const publicDirectory = express.static(pubDir);

app.use(publicDirectory);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
