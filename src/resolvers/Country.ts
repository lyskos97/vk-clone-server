import Country from '../models/Country';

export default {
  Query: {
    allCountries: () => {
      return Country.find();
    }
  },
  Mutation: {
    createCountry: async (source: any, { record }: any) => {
      const country = Country.create(record);
      return country.save();
    }
  }
};
