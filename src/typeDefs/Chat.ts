export default `
  type Chat {
    id: ID!
    name: String!
    admin: User!
    members: [User!]
    messages: [Message!]
  }
`;
