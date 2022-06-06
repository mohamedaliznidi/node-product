import { GraphQLObjectType } from 'graphql';
import getAllProductQuery from './getAllProductQuery';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    products: getAllProductQuery,
  },
});

export default query;
