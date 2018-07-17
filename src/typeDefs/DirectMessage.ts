export default `
  type DirectMessage {
    id: ID!
    text: String!
    sender: User!
    receiver: User!
  }
`;
