import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URI,
  ssl: true,
  synchronize: true,
  entities: ['src/models/*.ts']
};

module.exports = config;
