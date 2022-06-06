import { GraphQLObjectType } from 'graphql';
import createProductMutation from './createProductMutation';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createProduct: createProductMutation,
  },
});

export default mutation;
