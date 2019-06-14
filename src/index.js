import { ApolloServer, mergeSchemas } from 'apollo-server';
import helloSchema from './hello';
import peopleSchema from './people';
import postSchema from './post';

const schema = mergeSchemas({
  schemas: [helloSchema, peopleSchema, postSchema],
});

const server = new ApolloServer({
  schema,
});

server.listen({ port: 4005 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
