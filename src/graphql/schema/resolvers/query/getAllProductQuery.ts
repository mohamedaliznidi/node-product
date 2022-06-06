/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { GraphQLList } from 'graphql';
import GqlProduct from '@src/graphql/schema/typedefs/GqlProduct';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import { getAllProduct } from '@src/data/productService';
import { Product } from '.prisma/client';

const getAllProductQuery = {
  type: new GraphQLList(GqlProduct),
  resolve: async (_: unknown, __: unknown, _context: IApolloServerContext): Promise<Product[]> => {
    return getAllProduct();
  },
};

export default getAllProductQuery;
