import { Request, Response } from 'express';
import loginService from '../services';
import { Login } from '../types/Login';

const loginController = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { username, password }: Login = req.body;

    const result = await loginService.loginService.login({ username, password });

    res.status(result.status).json(result.data);
  } catch (err) {
    console.log(err);
  }
};

export default {
  loginController,
};