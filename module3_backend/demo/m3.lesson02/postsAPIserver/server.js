const db = require('./db');
const express = require('express');
const app = express();


app.get('/about', (req, res) => res.send('About page'));

app.get('/posts/', (req, res) => {
  res.send(JSON.stringify(db))
});

app.get('/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = db.find(post => post.id === id);
  res.send(JSON.stringify(post));
});


app.listen(3000,
  () => console.log('Post API server listening on port 3000!')
);