import { Request, Response } from 'express';

const Product = require('../models/Product');

export const list = async (req: Request, res: Response) => {
  let products = await Product.findAll();

  res.status(200);
  res.json({ products: products});
}
