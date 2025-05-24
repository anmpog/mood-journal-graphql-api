export const typeDefs = `#graphql
  type User {
    firstName: String!
    lastName: String!
    email: String!
  } 

  type Query {
    getUsers: [User]
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!): User
  }
`
