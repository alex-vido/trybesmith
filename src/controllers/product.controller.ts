import { NextFunction, Request, Response } from 'express';
import ProductService from '../services';
import { Product } from '../types/Product';

async function createProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, price, orderId } = req.body;
    const result = await ProductService.ProductService.createProduct(
      { name, price, orderId } as Product,
    );
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

const allProductsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductService.ProductService.allProducts();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export = {
  createProduct,
  allProductsController,
};