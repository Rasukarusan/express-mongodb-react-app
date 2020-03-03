import express = require('express');
import multer = require('multer');

const router = express.Router();
const upload = multer({ dest: './uploads/' });
const controller = require('../controllers/orderController');

router.post('/', upload.array('file'), controller.store);
router.get('/', controller.index);

module.exports = router;
