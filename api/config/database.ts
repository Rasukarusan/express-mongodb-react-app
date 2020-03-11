import mongoose = require('mongoose');

const options = {
  useNewUrlParser: true, 
};

let dbName = process.env.__DB_NAME_DEV__;
if (process.env.NODE_ENV === 'test') {
  dbName = process.env.__DB_NAME_TEST__;
}

mongoose.connect(`${process.env.__MONGO_HOST__}/${dbName}`, options);

const db = mongoose.connection;
db.on('error', error => {
  console.log('DB接続エラー: ', error);
});
db.once('open', () => {
  console.log('DB接続OK!!');
})

export default db;
