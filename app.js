const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send('hello world 123')
});

app.listen(port, () => console.log('running app'))