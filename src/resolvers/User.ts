import User from '../models/User';

export default {
  Query: {
    allUsers: () => {
      return User.find();
    }
  },
  Mutation: {
    createUser: (source: any, { record }: any) => {
      const user = User.create(record);
      return user.save();
    }
  }
};
