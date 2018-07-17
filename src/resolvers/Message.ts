import Message from '../models/Message';
import User from '../models/User';
import Chat from '../models/Chat';

export default {
  Query: {
    allMessages: () => Message.find()
  },
  Mutation: {
    createMessage: async (_: any, args: any) => {
      const { senderId, chatId, ...messageData } = args.record;
      const message = Message.create(messageData);
      const sender = await User.findOne(senderId);
      const chat = await Chat.findOne(chatId);
      message.sender = sender;
      message.chat = chat;

      return message.save();
    }
  }
};
