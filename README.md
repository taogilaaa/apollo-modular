# apollo-modular

A proof of concept modularing resolver and schema

Playground: https://apollo-modular-tpxrqfgvrl.now.sh

## Getting Started

**Clone the repository**

```sh
git clone git@github.com:taogilaaa/apollo-modular.git
```

**Install dependencies**

```sh
yarn install # or npm install
yarn start   # or npm start
```

**Run the app**

```sh
yarn start   # or npm start
```

**Deployment:**

We can deploy the existing solution by installing [Zeit now](https://zeit.co/now)

```sh
npx now --public
```

## Notes

- Using `typeDefs` and `resolvers` using `makeExecutableSchema` and exporting the schema and then using `mergeSchemas` to combine all of them seems to not combine same type with extra property

- As of this time `importSchema` from `graphql-import` doesn't seem to support `extend` type, but using pure string or `gql` tag works https://github.com/prisma/graphql-import/issues/42

- Using comments followed by extend throws syntax error

  - Works

  ```js
  const typeDefs = gql`
    extend type Post {
      id: Int!
      description: String
      imageUrl: String
    }
  `;
  ```

  - `GraphQLError: Syntax Error: Unexpected Name "extend"`

  ```js
  const typeDefs = gql`
    """This is Post"""
    extend type Post {
      id: Int!
      description: String
      imageUrl: String
    }
  `;
  ```

  - Works

  ```js
  const typeDefs = gql`
    extend type Post {
      """
      This is id
      """
      id: Int!
      description: String
      imageUrl: String
    }
  `;
  ```

- Importing `.graphql` files using [babel-plugin-import-graphql](https://github.com/detrohutt/babel-plugin-import-graphql) adds complexity of clearing cache everytime the `graphql` file is changed (might make watch mode harder to do)

- Importing `.graphql` files using `webpack` + [graphql-tag/loader](https://github.com/apollographql/graphql-tag) adds complexity of setting up webpack, but i personally think this is a better approach even for production-level

- For data fetching, we should be able to create wrapper functions like `createPost`, `getPosts`, etc and put it inside [Apollo Context](https://www.apollographql.com/docs/apollo-server/essentials/data/)
