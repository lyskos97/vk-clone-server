export default `
  type City {
    uid: ID!
    name: String!
  }

  type Query {
    allCities: [City!]
  }

  input CreateCityInput {
    name: String!
  }

  type RemoveCityPayload {
    success: Boolean!
  }

  type Mutation {
    createCity(record: CreateCityInput!): City
    removeCity(id: ID!): RemoveCityPayload!
  }
`;
