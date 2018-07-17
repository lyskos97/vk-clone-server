import User from '../models/User';
import Profile from '../models/Profile';

interface IUser {
  email: string;
  password: string;
  profile: {
    firstName: string;
    lastName: string;
    avatar?: string;
  };
}

type CreateUserArgs = {
  record: IUser;
};

export default {
  Query: {
    allUsers: () => {
      return User.find();
    }
  },
  Mutation: {
    createUser: (source: any, args: CreateUserArgs) => {
      const { profile: profileData, ...userData } = args.record;
      const user = User.create(userData);
      const profile = Profile.create(profileData);
      user.profile = profile;

      return user.save();
    }
  }
};
