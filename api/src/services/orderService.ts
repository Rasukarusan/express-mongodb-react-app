import Order from '../models/orders';
let faker = require("faker/locale/ja")

export default class OrderService {

  public async getAll() {
    try {
      return Order.find().exec();
    }catch(err) {
      throw err;
    }
  }

  public async getById(id: string) {
    try {
      return Order.findById(id).exec();
    } catch (e) {
      throw e;
    }
  }

  public async save(files: Express.Multer.File[]) {
    files.map((file: Express.Multer.File) => {
      console.log(file);
    });
    try {
      let mocks = [];
      let malls = ['amazon', 'rakuten', 'ebay', 'futureshop'];
      for(let i = 0;i < 1000; ++i) {
        let mall = malls[Math.floor(Math.random() * malls.length)];
        let mock = {
          mall: mall,
          orderNumber: faker.finance.bitcoinAddress() ,
          buyerPostCode: faker.address.zipCode(),
          buyerName: faker.name.findName(),
          buyerAddress: faker.address.state() + ' ' + faker.address.streetAddress(),
          total: faker.commerce.price(),
        };
        mocks.push(mock);
      }
      return Order.insertMany(mocks);
    } catch (e) {
      throw e;
    }
  }

  public async update() {
    try {
      return Order.updateMany({ name: 'hoge' }, { name: 'hogehoge' });
    } catch (e) {
      throw e;
    }
  }

  public async delete(where: { [key: string] : any }) {
    try {
      return Order.deleteMany(where);
    } catch (e) {
      throw e;
    }
  }
}
