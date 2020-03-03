import { Request, Response } from "express";
import mongoose = require('mongoose');
import Order from '../models/order';

exports.index = function(req: Request, res: Response) {
  Order.find(function(err, orders) {
    if (err) return console.log(err);
    orders.map(order => {
      console.log(order.name);
      console.log(order.age);
    })
  });
  res.send('this is orderController index!!');
}

exports.upload = function(req: Request, res: Response) {
  if (!req.files) {
    return;
  }
  let files = req.files as Express.Multer.File[];
  files.map((file: Express.Multer.File) => {
    console.log(file);
  });
  res.status(200).json({msg: 'アップロード完了'})
}
