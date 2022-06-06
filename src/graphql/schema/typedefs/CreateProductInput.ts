import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CreateProductInput = new GraphQLInputObjectType({
  name: 'CreateProductInput',
  description: 'CreateProductInput',
  fields: {
    nom: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the product',
    },
    nomCommercial: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The commercial name of the product',
    },
    dateEffet: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The effective date of the product',
    },
  },
});

export default CreateProductInput;
