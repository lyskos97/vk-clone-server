import Message from '../models/Message';
import User from '../models/User';
import Chat from '../models/Chat';

type CreateMessageArgs = {
  record: {
    text: string;
    senderId: number;
    chatId: number;
  };
};

export default {
  Query: {
    allMessages: () => Message.find()
  },
  Mutation: {
    createMessage: async (_: any, args: CreateMessageArgs) => {
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
