import { Order } from '../types/Order';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';

const createOrder = async (product: Order): Promise<OrderSequelizeModel> => {
  const result = await OrderModel.create(product);
  return result;
};

const allOrders = async (): Promise<OrderSequelizeModel[]> => {
  const orders = await OrderModel.findAll();
  return orders;
};

export = {
  createOrder,
  allOrders, 
};