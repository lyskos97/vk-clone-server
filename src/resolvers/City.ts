import City from '../models/City';
import { Source } from 'graphql';
import Country from '../models/Country';

type CreateCityArgs = {
  record: {
    name: string;
    countryId: number;
  };
};

type RemoveCityArgs = {
  id: number;
};

export default {
  Query: {
    allCities: () => {
      return City.find({ relations: ['country'] });
    }
  },
  Mutation: {
    createCity: async (source: any, args: CreateCityArgs) => {
      const { countryId, ...cityData } = args.record;
      const city = City.create(cityData);
      const country = await Country.findOne(countryId);
      city.country = country;

      return city.save();
    },
    removeCity: async (source: Source, { id }: RemoveCityArgs) => {
      try {
        const city = await City.findOne(id);
        await city.remove();
        return { success: true };
      } catch (e) {
        return { success: false };
      }
    }
  }
};
