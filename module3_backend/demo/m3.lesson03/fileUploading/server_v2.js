const express = require('express');
const app = express();

const multer  = require('multer');
// option 1: using dest (simple, less control)
const upload = multer({ dest: 'uploads/' });

// option 2: using diskStorage (require configuration, more control)
// see: https://www.npmjs.com/package/multer#storage
// const storage = multer.diskStorage({
//   destination: 'uploads/',
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   }
// });
// const upload = multer({ storage: storage });

// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// https://www.npmjs.com/package/multer
app.post('/', upload.single('fileToUpload'), (req, res) => {
  res.status(200).send('Accepted');
  console.log(req.file.originalname, 'Accepted');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));



