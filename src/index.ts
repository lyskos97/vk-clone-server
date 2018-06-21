require('dotenv').config();
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { createConnection, ConnectionOptions } from 'typeorm';

import routes from './routes';
import schema from './schema';

const connectionOpts: ConnectionOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URI,
  ssl: true,
  synchronize: true,
  entities: ['models/*.ts']
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
    app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

    app.listen(port, () => {
      console.log('Awesome app is on port', port);
    });
  })
  .catch(e => {
    console.log('TypeORM connection error:', e);
  });
