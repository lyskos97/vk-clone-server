export default `
  type Country {
    uid: ID!
    name: String!
  }

  input CreateCountryInput {
    name: String!
  }

  type Query {
    allCountries: [Country!]
  }

  type Mutation {
    createCountry(record: CreateCountryInput!): Country
  }
`;
