import express = require('express');
export const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Express');
});

module.exports = router;
