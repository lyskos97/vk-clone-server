require('dotenv').config();
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { createConnection, ConnectionOptions } from 'typeorm';

import routes from './routes';

const connectionOpts: ConnectionOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URI,
  entities: ['src/models/*.ts'],
  ssl: true,
  synchronize: true
};

createConnection(connectionOpts)
  .then(conn => {
    const app = express();
    const port = process.env.PORT || 4000;

    app.use(morgan('dev'));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', routes);

    app.listen(port, () => {
      console.log('Awesome app is on port', port);
    });
  })
  .catch(e => {
    console.log('TypeORM connection error:', e);
  });
