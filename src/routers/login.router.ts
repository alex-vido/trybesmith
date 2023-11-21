import { Router } from 'express';
import loginController from '../controllers';
import loginMiddleware from '../middlewares';

const router = Router();
router.post(
  '/', 
  loginMiddleware.loginMiddleware.loginValidator,
  loginController.loginController.loginController,
);

export = router;