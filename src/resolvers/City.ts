import City from '../models/City';
import { Source } from 'graphql';

export default {
  Query: {
    allCities: () => {
      return City.find();
    }
  },
  Mutation: {
    createCity: (source: any, { record }: any) => {
      const city = City.create(record);
      return city.save();
    },
    removeCity: async (source: Source, { id }: any) => {
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
