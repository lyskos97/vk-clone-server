import Country from '../models/Country';

type CreateCountryArgs = {
  record: {
    name: string;
  };
};

export default {
  Query: {
    allCountries: () => {
      return Country.find();
    }
  },
  Mutation: {
    createCountry: async (source: any, { record }: CreateCountryArgs) => {
      const country = Country.create(record);
      return country.save();
    }
  }
};
