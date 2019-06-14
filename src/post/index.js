import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'apollo-server';
import resolvers from './resolvers';

const typeDefs = importSchema('./src/post/schema.graphql');
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
