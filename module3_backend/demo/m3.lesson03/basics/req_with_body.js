const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/user', (req, res) => {
  console.log('got POST with body:', req.body);
  res.send('got POST with body:' + JSON.stringify(req.body));
});

app.listen(4000, () => console.log('Example app listening on port 4000!'))




