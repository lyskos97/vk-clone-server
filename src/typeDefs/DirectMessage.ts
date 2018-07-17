export default `
  type DirectMessage {
    id: ID!
    text: String!
    sender: User!
    receiver: User!
  }

  type Query {
    allDirectMessages: [DirectMessage!]
  }

  input CreateDirectMessageInput {
    text: String!
    sender: User!
    receiver: User!
  }

  type Mutation {
    createDirectMessage(record: CreateDirectMessageInput!): DirectMessage!
  }
`;
