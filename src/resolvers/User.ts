import User from '../models/User';

export default {
  Query: {
    allUsers: () => {
      return User.find();
    }
  },
  Mutation: {
    createUser: async (source: any, { record }: any) => {
      const user = User.create(record);
      user.save();
      return user;
    }
  }
};
