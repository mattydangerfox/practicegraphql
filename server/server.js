import express from 'express';
import bodyParser from 'body-parser';
import {
  graphqlExpress,
  graphiqlExpress
} from 'graphql-server-express';
import { schema } from './src/schema';

const PORT = 4000;
const server = express();

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

server.listen(PORT, () => {
  console.log(`GraphQL server is running on ${PORT}!`);
});
