export default `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }

  input CreateUserPayload {
    firstName: String!
    lastName: String!
  }

  type Query {
    allUsers: [User!]
  }

  type Mutation {
    createUser(record: CreateUserPayload!): User
  }
`;
