import { Request, Response } from "express";
import mongoose = require('mongoose');
import Order from '../models/orders';

exports.index = function(req: Request, res: Response) {
  Order.find(function(err, orders) {
    if (err) return console.log(err);
    orders.map(order => {
      console.log(order.name);
      console.log(order.age);
    })
  });
  return res.send('this is controller!!!');
}

exports.show = function(req: Request, res: Response) {
  console.log(req.params.id);
  let id = req.params.id;
  Order.findById(id, function(err, order) {
    console.log(order);
  })
  return res.send('Parameter: ' + req.params.id);
}

exports.store = function(req: Request, res: Response) {
  if (!req.files) {
    return;
  }
  // Read uploaded files
  let files = req.files as Express.Multer.File[];
  files.map((file: Express.Multer.File) => {
    console.log(file);
  });
  // Save to DB
  Order.insertMany([
    { name: 'hoge', age: 11 },
    { name: 'fooo', age: 12 },
  ], (err) => {
    if (err) return res.send(err);
  });
  return res.status(200).json({msg: 'Upload OK!'})
}

exports.update = function(req: Request, res: Response) {
  Order.updateOne({name: 'hoge'}, {name: 'hogehoge'}, (err, row) => {
    if (err) return res.send(err);
    return res.send(row);
  });
}

exports.destroy = function(req: Request, res: Response) {
  Order.deleteOne({name: 'tanak', age: 999}, (err) => {
    if (err) return res.send(err);
  })
  return res.send('Parameter of Delete: ' + req.params.id);
}
