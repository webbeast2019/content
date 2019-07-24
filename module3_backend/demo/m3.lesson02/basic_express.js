const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/about', function (req, res) {
  res.send('About Page')
});
app.get('/home', function (req, res) {
  res.send('Home Page')
});
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));



