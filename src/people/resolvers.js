let people = [
  {
    id: 1,
    firstName: 'Michael',
    lastName: 'Suyama',
    email: 'suyama@wp.co',
    likedPosts: [1, 2],
  },
  {
    id: 2,
    firstName: 'Nancy',
    lastName: 'DaVolio',
    email: 'davolio@wp.co',
    likedPosts: [1],
  },
  {
    id: 3,
    firstName: 'David',
    lastName: 'Buchanan',
    email: 'buchanan@wp.co',
    likedPosts: [2, 3],
  },
];

const resolvers = {
  Person: {
    fullName: ({ firstName, lastName }) => `${firstName} ${lastName}`,
    // likedPosts: ({ likedPosts }) =>
    //   posts.filter((post) => likedPosts.includes(post.id)),
  },
  Query: {
    people: () => people,
    person: (_, { id }) => people.find((person) => person.id === id),
  },
};

export default resolvers;
