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
    senderId: ID!
    receiverId: ID!
  }

  type Mutation {
    createDirectMessage(record: CreateDirectMessageInput!): DirectMessage!
  }
`;
