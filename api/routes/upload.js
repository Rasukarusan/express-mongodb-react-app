const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: './uploads/' });
const app = express();

router.post('/', upload.fields([ {name : 'myFile'} ]), (req, res) => {
  console.log(req.files);
  if (!req.files) return;
  req.files.map(file => {
    console.log(file);
  });
})

router.get('/', function(req, res, next) {
   res.send('Upload done!')
});

module.exports = router;
