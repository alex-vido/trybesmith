import { Order } from '../types/Order';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductService from './product.service';

const createOrder = async (product: Order): Promise<OrderSequelizeModel> => {
  const result = await OrderModel.create(product);
  return result;
};

const allOrders = async (): Promise<Order[]> => {
  const orders = await OrderModel.findAll();
  const orderIds = await Promise.all(orders.map(async (order) => {
    const { id, userId } = order.dataValues;
    const productIds = await ProductService.getProductById(order.dataValues.id);
    return { id, userId, productIds };
  }));
  return orderIds;
};

export = {
  createOrder,
  allOrders, 
};