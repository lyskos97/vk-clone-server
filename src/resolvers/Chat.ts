import Chat from '../models/Chat';
import User from '../models/User';

export default {
  Query: {
    allChats: () => Chat.find()
  },
  Mutation: {
    createChat: async (_: any, args: any) => {
      const { adminId, ...chatData } = args.record;
      const chat = Chat.create(chatData);
      const admin = await User.findOne(adminId);
      chat.admin = admin;

      return chat.save();
    }
  }
};
