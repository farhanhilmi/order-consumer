import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

// eslint-disable-next-line object-curly-newline
const { MONGODB_URI, KAFKA_CLIENT_ID, KAFKA_BROKERS } = process.env;

const config = {
  db: {
    uri: MONGODB_URI,
  },
  kafka: {
    CLIENT_ID: KAFKA_CLIENT_ID,
    BROKERS: KAFKA_BROKERS,
  },
};

export default config;
