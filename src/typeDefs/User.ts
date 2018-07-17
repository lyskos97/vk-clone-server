// TODO: a lot to implement & describe
export default `
  type User {
    id: ID!
    email: String!
    profile: Profile!
    password: String!
  }

  input CreateUserInput {
    email: String!
    password: String!
    profile: CreateProfileInput!
  }

  type Query {
    allUsers: [User!]
  }

  type Mutation {
    createUser(record: CreateUserInput!): User
  }
`;
