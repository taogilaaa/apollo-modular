import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'apollo-server';
import resolvers from './resolvers';

const typeDefs = importSchema('./src/people/schema.graphql');
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
