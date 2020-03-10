import mongoose = require('mongoose');

const options = {
  useNewUrlParser: true, 
};
mongoose.connect('mongodb://mongodb:27017/test', options);

const db = mongoose.connection;
db.on('error', error => {
  console.log('DB接続エラー: ', error);
});
db.once('open', () => {
  console.log('DB接続OK!!');
})

export default db;
