import User from '../models/User';
import Profile from '../models/Profile';

export default {
  Query: {
    allUsers: () => {
      return User.find();
    }
  },
  Mutation: {
    createUser: (source: any, args: any) => {
      const { profile: profileData, ...userData } = args.record;
      const user = User.create(userData);
      const profile = Profile.create(profileData);
      user.profile = profile;

      return user.save();
    }
  }
};
