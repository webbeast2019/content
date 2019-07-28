const express = require('express');
const app = express();

// see: https://riptutorial.com/node-js/example/10101/setting-node-env--production-
process.env.NODE_ENV = "production";

app.get('/', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
});

app.listen(4000, () => console.log('Example app listening on port 4000!'))




