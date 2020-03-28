import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import schema from '@/graphql/schema';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use('', routes);

const server = new ApolloServer({
  schema,
  tracing: process.env.NODE_ENV === 'development',
});

server.applyMiddleware({ app });

export default app;
