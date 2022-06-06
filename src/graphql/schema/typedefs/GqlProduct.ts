/* eslint-disable prettier/prettier */
import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const GqlProduct = new GraphQLObjectType({
  name: 'Product',
  description: 'Product',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of the product',
    },
    nom: {
      type: GraphQLString,
      description: 'The name of the product',
    },
    nomCommercial: {
      type: GraphQLString,
      description: 'The commercial name of the product',
    },
    dateEffet: {
      type: GraphQLString,
      description: 'The effective date of the product',
    },
  },
});

export default GqlProduct;
