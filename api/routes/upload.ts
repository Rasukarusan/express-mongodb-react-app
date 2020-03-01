import express = require('express');
import multer = require('multer');
const router = express.Router();
const app = express();
const upload = multer({ dest: './uploads/' });

const controller = require('../controllers/orderController');
router.post('/', upload.array('file'), controller.upload);
router.get('/', function(req, res, next) {
   res.send('Upload done!')
});

module.exports = router;
