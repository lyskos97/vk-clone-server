export default `
  type City {
    id: ID!
    name: String!
    country: Country!
  }

  type Query {
    allCities: [City!]
  }

  input CreateCityInput {
    name: String!
    countryId: ID!
  }

  type RemoveCityPayload {
    success: Boolean!
  }

  type Mutation {
    createCity(record: CreateCityInput!): City
    removeCity(id: ID!): RemoveCityPayload!
  }
`;
