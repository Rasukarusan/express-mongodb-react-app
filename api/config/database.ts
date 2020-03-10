import mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb:27017/test', {useNewUrlParser: true});
mongoose.connection.on('error', error => {
  console.log('DB接続エラー: ', error);
});
mongoose.connection.once('open', () => {
  console.log('DB接続OK!!');
})

const db = mongoose.connection;
export default db;
