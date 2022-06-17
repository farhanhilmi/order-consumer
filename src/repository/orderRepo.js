import Order from '../models/order.js';

export const addNewOrder = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const order = await Order.create(data);
      resolve(order);
    } catch (err) {
      reject(err);
    }
  });
};
