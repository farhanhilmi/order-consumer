import { addNewOrder } from './repository/orderRepo.js';

export default async (consumer) => {
  await consumer.run({
    eachMessage: async ({ message }) => {
      try {
        const data = JSON.parse(message.value.toString());
        await addNewOrder(data);
      } catch (error) {
        console.log(error);
      }
    },
  });
};
