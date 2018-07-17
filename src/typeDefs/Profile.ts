export default `
  type Profile {
    firstName: String!
    lastName: String!
    avatar: String
  }

  input CreateProfileInput {
    firstName: String!
    lastName: String!
  }
`;
