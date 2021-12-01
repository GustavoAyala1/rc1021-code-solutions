const express = require('express');
const app = express();

app.use('/', function (req, res, next) {
  // console.log(req.method);
  res.send('Hello World!');
  next();
});

app.listen(3000, () => {
  // console.log("listening on port 3000");
});
