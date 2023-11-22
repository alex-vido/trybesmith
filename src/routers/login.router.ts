import { Router } from 'express';
import loginController from '../controllers/login.controller';
import loginMiddleware from '../middlewares/login.middleware';

const router = Router();
router.post(
  '/', 
  loginMiddleware.loginValidator,
  loginController.loginController,
);

export = router;