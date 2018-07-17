module.exports = {
  type: 'postgres',
  url: process.env.POSTGRES_URI,
  ssl: true,
  synchronize: true,
  entities: ['src/models/*.ts']
};
