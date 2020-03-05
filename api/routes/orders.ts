import express = require('express');
import multer = require('multer');

const router = express.Router();
const upload = multer({ dest: './uploads/' });
const controller = require('../controllers/orderController');

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', upload.array('file'), controller.store);
router.delete('/:id', controller.delete);

module.exports = router;
