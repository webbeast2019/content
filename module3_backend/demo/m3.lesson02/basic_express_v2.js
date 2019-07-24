const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/about', function (req, res, next) {
  res.send('About Page');
  next();
});
app.get('/home', function (req, res) {
  res.send('Home Page')
});

app.all('/user', function (req, res) {
  res.send(`Got a ${req.method} request at /user`);
});

// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user')
// });

app.get('*', function (req, res) {
  console.log('This is * route');
  console.log(req.url);
  // res.send('Fallback')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));




