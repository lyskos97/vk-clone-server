export default `
  type Message {
    id: ID!
    text: String!
    sender: User!
    chat: Chat!
  }

  type Query {
    allMessages: [Message!]
  }

  input CreateMessageInput {
    text: String!
    senderId: ID!
    chatId: ID!
  }

  type Mutation {
    createMessage(record: CreateMessageInput!): Message!
  }
`;
