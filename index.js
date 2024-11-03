const express = require('express');
const app = express();
const port = 8181;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World! ' });
    });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
