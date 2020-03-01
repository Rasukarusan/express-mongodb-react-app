import { Request, Response } from "express";

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
