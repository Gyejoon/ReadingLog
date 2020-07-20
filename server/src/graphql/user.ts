import { gql, IResolvers } from 'apollo-server-express';
import { ApolloContext } from '@/app';
import { getRepository } from 'typeorm';
import User from '@/entity/User';

export const typeDef = gql`
  type User {
    id: ID!
    username: String
    created_at: Date
    updated_at: Date
    is_certified: Boolean
    profile: UserProfile
  }
  type UserProfile {
    id: ID!
    nickname: String
    thumbnail: String
    created_at: Date
    updated_at: Date
    about: String
    profile_links: JSON
  }
  extend type Query {
    auth: User
    user(username: String): User
  }
`;

export const resolvers: IResolvers<any, ApolloContext> = {
  Query: {
    auth: async (_parent: any, _args: any, ctx) => {
      if (!ctx.user_id) return null;

      const user = await getRepository(User).findOne(ctx.user_id, {
        relations: ['profile'],
      });

      return user;
    },
    user: async (_parent: any, { username }, ctx) => {
      const repo = getRepository(User);

      if (username) {
        const user = await repo.findOne({
          where: { username },
          relations: ['profile'],
        });

        return user;
      }
    },
  },
  Mutation: {},
};
