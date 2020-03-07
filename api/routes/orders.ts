import express = require('express');
import multer = require('multer');

const router = express.Router();
const upload = multer({ dest: './uploads/' });
const controller = require('../src/controllers/orderController');

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', upload.array('file'), controller.store);
router.patch('/:id', controller.update)
router.delete('/:id', controller.destroy);

module.exports = router;
