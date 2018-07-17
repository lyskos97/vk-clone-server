import Chat from '../models/Chat';
import User from '../models/User';

type CreateChatArgs = {
  record: {
    adminId: number;
    name: string;
  };
};

export default {
  Query: {
    allChats: () => Chat.find()
  },
  Mutation: {
    createChat: async (_: any, args: CreateChatArgs) => {
      const { adminId, ...chatData } = args.record;
      const chat = Chat.create(chatData);
      const admin = await User.findOne(adminId);
      chat.admin = admin;

      return chat.save();
    }
  }
};
