const port = 3000;
const express = require("express");
const server = express();

server.use('/', (req, res) => {
  res.status(200).send('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});