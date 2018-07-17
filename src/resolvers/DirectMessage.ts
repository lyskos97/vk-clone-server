import DirectMessage from '../models/DirectMessage';
import User from '../models/User';

type CreateDirectMessageArgs = {
  record: {
    text: string;
    senderId: number;
    receiverId: number;
  };
};

export default {
  Query: {
    allDirectMessages: () => DirectMessage.find({ relations: ['sender', 'receiver'] })
  },
  Mutation: {
    createDirectMessage: async (_: any, args: CreateDirectMessageArgs) => {
      const { senderId, receiverId, ...directMessageData } = args.record;
      const directMessage = DirectMessage.create(directMessageData);
      const sender = await User.findOne(senderId);
      const receiver = await User.findOne(receiverId);
      directMessage.sender = sender;
      directMessage.receiver = receiver;

      return directMessage.save();
    }
  }
};
