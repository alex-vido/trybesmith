import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import productMiddleware from '../middlewares/product.middleware';

const router = Router();
router.post(
  '/', 
  productMiddleware.nameValidator,
  productMiddleware.priceValidator,
  ProductController.createProduct,
);

router.get(
  '/',
  ProductController.allProductsController,
);

export = router;