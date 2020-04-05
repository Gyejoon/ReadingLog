import merge from 'lodash/merge';
import * as user from './user';
import { IResolvers, makeExecutableSchema, gql } from 'apollo-server-express';

const typeDef = gql`
  scalar JSON
  scalar Date
  type Query {
    _version: String
  }
  type Mutation {
    _empty: String
  }
`;

const resolvers: IResolvers = {
  Query: {
    _version: () => '1.0',
  },
  Mutation: {},
};

const schema = makeExecutableSchema({
  typeDefs: [typeDef, user.typeDef],
  resolvers: merge(resolvers, user.resolvers),
});

export default schema;
