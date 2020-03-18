import mongoose = require('mongoose');

interface IOrderDocument extends mongoose.Document {
  name: string,
  age: number
}

const schemaOptions = {
  timestamps: { 
    createdAt: 'created_at',
    updatedAt: 'updated_at' 
  },
  versionKey: false
};

const orderSchema = new mongoose.Schema({
  mall:          String,
  orderNumber:   String,
  buyerPostCode: String,
  buyerName:     String,
  buyerAddress:  String,
  total:         Number,
}, schemaOptions);

const Order = mongoose.model<IOrderDocument>('orders', orderSchema);
export default Order;
