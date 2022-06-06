/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { GraphQLNonNull } from 'graphql';
import { Product } from '@prisma/client';
import CreateProductInput from '@src/graphql/schema/typedefs/CreateProductInput';
import GqlProduct from '@src/graphql/schema/typedefs/GqlProduct';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import { createProduct } from '@src/data/productService';

const createProductMutation = {
  type: GqlProduct,
  args: {
    input: {
      type: new GraphQLNonNull(CreateProductInput),
      description: 'CreateProductInput',
    },
  },
  resolve: async (
    _source: unknown,
    { input: { nom, nomCommercial, dateEffet } }: any,
    _context: IApolloServerContext
  ): Promise<Product> => {
    const product = await createProduct(nom, nomCommercial, dateEffet);
    return product;
  },
};

export default createProductMutation;
