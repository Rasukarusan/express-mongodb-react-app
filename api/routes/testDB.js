const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

let databaseConnection = 'DBレスポンス待機中....'

router.get('/', function(req, res, next) {res.send(databaseConnection)});

mongoose.connect('mongodb://mongodb:27017/test', {useNewUrlParser: true});

mongoose.connection.on('error', error => {
  console.log('DB接続エラー: ', error);
  databaseConnection = error;
});


mongoose.connection.once('open', () => {
  console.log('DB接続OK!!');
  databaseConnection = 'DBに接続';
})

module.exports = router;
