import express = require('express');
import multer = require('multer');
const router = express.Router();
const app = express();
const upload = multer({ dest: './uploads/' });

const controller = require('../controllers/orderController');
router.post('/', upload.array('file'), controller.upload);
router.get('/', controller.index);

module.exports = router;
