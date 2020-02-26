import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import schema from '@/graphql/schema';

const app = express();

app.use(express.json());
app.use(cors());

const server = new ApolloServer({
  schema,
  tracing: process.env.NODE_ENV === 'development',
});

server.applyMiddleware({ app });

export default app;
