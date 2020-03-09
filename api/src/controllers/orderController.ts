import { Request, Response } from "express";
import OrderService from '../services/orderService';
const service = new OrderService();

exports.index = async function(req: Request, res: Response) {
  try {
    let orders = await service.getAll();
    return res.send(orders);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

exports.show = async function(req: Request, res: Response) {
  let id = req.params.id;
  try {
    let order = await service.getById(id);
    return res.send(order);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

exports.store = async function(req: Request, res: Response) {
  if (!req.files) {
    return res.status(204).json({msg: 'Not found files. Please upload files. '})
  }
  let files = req.files as Express.Multer.File[];
  try {
    let order = await service.save(files);
    return res.status(200).json({msg: 'Upload OK!', record: order})
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

exports.update = async function(req: Request, res: Response) {
  try {
    let orders = await service.update();
    return res.send(orders);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

exports.destroy = async function(req: Request, res: Response) {
  try {
    let where = { name: 'hoge', age: 11 };
    let orders = await service.delete(where);
    return res.send(orders);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}
