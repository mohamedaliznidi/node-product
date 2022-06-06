import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv-safe';
import { IApolloServerContext } from './interfaces/IApolloServerContext';
import schema from '@src/graphql/schema/schema';
import { performAstCodegen } from '@src/codegen';
import prisma from '@src/prisma/client';

dotenv.config();

const startServer = () => {
  performAstCodegen();

  const context: IApolloServerContext = {
    prisma,
  };

  const server = new ApolloServer({
    schema,
    context,
  });

  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    })
    .catch(err => {
      console.error(err);
    });
};

startServer();
