export default `
  type Country {
    id: ID!
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
