import { Kafka } from 'kafkajs';
import mongoose from 'mongoose';

import config from './config.js';
import createOrder from './createOrder.js';

mongoose.connect(config.db.uri, {
  useNewUrlParser: true,
});

mongoose.connection.on('open', () => {
  console.log('Connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongo connection error: ${err.message}`);
});

try {
  const client = new Kafka({
    clientId: 'order-service',
    brokers: ['localhost:8092'],
  });

  const consumer = client.consumer({ groupId: 'orderservice' });
  await consumer.connect();
  await consumer.subscribe({ topic: 'user_order', fromBeginning: true });

  createOrder(consumer);
} catch (error) {
  console.log(error);
}
