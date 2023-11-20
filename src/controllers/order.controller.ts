import { NextFunction, Request, Response } from 'express';
import OrderService from '../services';
import { Order } from '../types/Order';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, productId } = req.body;
    const result = await OrderService.OrderService.createOrder(
      { userId, productId } as Order,
    );
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const allOrdersController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderService.OrderService.allOrders();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export = {
  createOrder,
  allOrdersController,
};