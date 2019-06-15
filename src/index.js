import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import hello from './hello';
import people from './people';
import post from './post';
import baseTypeDefs from './schema.graphql';

const schema = makeExecutableSchema({
  typeDefs: [baseTypeDefs, hello.typeDefs, people.typeDefs, post.typeDefs],
  resolvers: [hello.resolvers, people.resolvers, post.resolvers],
});

const server = new ApolloServer({
  schema,
});

server.listen({ port: 4005 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
