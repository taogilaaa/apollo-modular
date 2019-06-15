let people = [
  {
    id: 1,
    firstName: 'Michael',
    lastName: 'Suyama',
    email: 'suyama@wp.co',
    likedPosts: [
      { id: 1, likedDate: new Date() },
      { id: 2, likedDate: new Date() },
    ],
  },
  {
    id: 2,
    firstName: 'Nancy',
    lastName: 'DaVolio',
    email: 'davolio@wp.co',
    likedPosts: [{ id: 2, likedDate: new Date() }],
  },
  {
    id: 3,
    firstName: 'David',
    lastName: 'Buchanan',
    email: 'buchanan@wp.co',
    likedPosts: [
      { id: 2, likedDate: new Date() },
      { id: 3, likedDate: new Date() },
    ],
  },
];

const resolvers = {
  Person: {
    fullName: ({ firstName, lastName }) => `${firstName} ${lastName}`,
    likedPosts: ({ likedPosts }) => {
      return likedPosts;
    },
  },
  Query: {
    people: () => people,
    person: (_, { id }) => people.find((person) => person.id === id),
  },
};

export default resolvers;
