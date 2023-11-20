import { Product } from '../types/Product';
import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';

const createProduct = async (product: Product): Promise<ProductSequelizeModel> => {
  const result = await ProductModel.create(product);
  return result;
};

const allProducts = async (): Promise<ProductSequelizeModel[]> => {
  const products = await ProductModel.findAll();
  return products;
};

export = {
  createProduct,
  allProducts, 
};