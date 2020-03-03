import mongoose = require('mongoose');

interface IOrderDocument extends mongoose.Document {
  name: String,
  age: Number
}

const orderSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Order = mongoose.model<IOrderDocument>('orders', orderSchema);
export default Order;
