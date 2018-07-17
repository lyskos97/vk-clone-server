export default `
  type Chat {
    id: ID!
    name: String!
    admin: User!
    members: [User!]
    messages: [Message!]
  }

  type Query {
    allChats: [Chat!]
  }

  input CreateChatInput {
    name: String!
    adminId: ID!
  }

  type Mutation {
    createChat(record: CreateChatInput!): Chat!
  }
`;
