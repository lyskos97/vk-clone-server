require('dotenv').config();
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { createConnection, ConnectionOptions } from 'typeorm';

import routes from './routes';
import schema from './schema';

createConnection()
  .then(async conn => {
    const app = express();
    const port = process.env.PORT || 4000;

    app.use(morgan('dev'));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/rest', routes);
    app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

    app.listen(port, () => {
      console.log(`Awesome app at http://localhost:${port}/graphql`);
    });
  })
  .catch(e => {
    console.log('TypeORM connection error:', e);
  });
