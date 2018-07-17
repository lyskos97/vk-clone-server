export default `
  type Post {
    id: ID!
    text: String!
    author: User!
  }

  type Query {
    allPosts: [Post!]
  }

  input CreatePostInput {
    text: String!
    authorId: ID!
  }

  type Mutation {
    createPost(record: CreatePostInput!): Post!
  }
`;
