let posts = [
  { id: 1, imageUrl: 'google.com', description: 'Introduction to GraphQL' },
  { id: 2, imageUrl: 'microsoft.com', description: 'Welcome to POC' },
  { id: 3, imageUrl: 'yahoo.com', description: 'Advanced GraphQL' },
];

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    posts: (_, { filter }) =>
      posts.filter((post) =>
        filter ? post.description.includes(filter) : posts,
      ),
    post: (_, { id }) => posts.find((post) => post.id === id),
  },
  Mutation: {
    createPost: (_, { imageUrl, description }) => {
      const newPost = { id: posts.length + 1, imageUrl, description };
      posts = [...posts, newPost];

      return newPost;
    },
    deletePost: (_, { id }) => {
      const deletedPost = posts.find((post) => post.id === id);
      posts = posts.filter((post) => post.id !== id);

      return deletedPost;
    },
  },
};

export default resolvers;
