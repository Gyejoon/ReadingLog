import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import schema from '@/graphql/schema';
import routes from './routes';
import { authorization } from './lib/middlewares/auth';
import logger from 'morgan';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(authorization);
app.use('', routes);

export type ApolloContext = {
  user_id: string | null;
};

const server = new ApolloServer({
  schema,
  context: ctx => {
    return {
      user_id: ctx.req.app.get('userId'),
    };
  },
  tracing: process.env.NODE_ENV === 'development',
});

server.applyMiddleware({ app, cors: false });

export default app;
