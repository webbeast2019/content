const express = require('express');
const app = express();

// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.post('/', (req, res) => {
  res.status(200).send('Accepted');
  console.log('Accepted');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));




