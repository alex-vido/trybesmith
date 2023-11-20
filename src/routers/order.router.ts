import { Router } from 'express';
import OrderController from '../controllers';

const router = Router();
router.post(
  '/', 
  OrderController.orderController.createOrder,
);

router.get(
  '/',
  OrderController.orderController.allOrdersController,
);

export = router;