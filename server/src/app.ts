import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import schema from '@/graphql/schema';
import routes from './routes';
import logger from 'morgan';
import { consumeUser } from './lib/token';
import cookieParser from 'cookie-parser';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);
app.use(consumeUser);
app.use('', routes);

export type ApolloContext = {
  user_id: string | null;
};

const server = new ApolloServer({
  schema,
  context: ctx => {
    return {
      user_id: ctx.req.app.get('user_id'),
    };
  },
  tracing: process.env.NODE_ENV === 'development',
});

server.applyMiddleware({ app, cors: false });

export default app;
