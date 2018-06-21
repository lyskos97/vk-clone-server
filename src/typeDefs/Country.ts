export default `
  type Country {
    uid: ID!
    name: String!
  }

  input CreateCountryPayload {
    name: String!
  }

  type Query {
    allCountries: [Country!]
  }

  type Mutation {
    createCountry(record: CreateCountryPayload!): Country
  }
`;
