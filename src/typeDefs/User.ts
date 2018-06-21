// TODO: a lot to implement & describe
export default `
  type Profile {
    firstName: String!
    lastName: String!
    avatar: String
  }

  type User {
    uid: ID!
    username: String!
    email: String!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
  }

  type Query {
    allUsers: [User!]
  }

  type Mutation {
    createUser(record: CreateUserInput!): User
  }
`;
