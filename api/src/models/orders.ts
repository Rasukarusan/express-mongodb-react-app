import mongoose = require('mongoose');

interface IOrderDocument extends mongoose.Document {
  name: string,
  age: number
}

const orderSchema = new mongoose.Schema({
  name: String,
  age: Number
},{
  versionKey: false
});

const Order = mongoose.model<IOrderDocument>('orders', orderSchema);
export default Order;
