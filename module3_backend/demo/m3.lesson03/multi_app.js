const express = require('express');
const appFoo = express();
const appBar = express();
const main = express();

appFoo.get('/', (req, res) => res.send('Hello Foo!'));

appFoo.get('/about', function (req, res) {
  res.send('About Foo Page')
});
appFoo.get('/home', function (req, res) {
  res.send('Foo Home Page')
});
appFoo.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
});

appBar.get('/', (req, res) => res.send('Hello Bar!'));

appBar.get('/about', function (req, res) {
  res.send('About Bar')
});
appBar.get('/bar', function (req, res) {
  res.send('Open Bar Page')
});


main.get('/', (req, res) => res.send('Hello main!'));
main.use('/foo', appFoo);
main.use('/bar', appBar);

main.listen(3000, () => console.log('main listening on port 3000!'));
