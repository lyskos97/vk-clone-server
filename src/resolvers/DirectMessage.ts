import DirectMessage from '../models/DirectMessage';
import User from '../models/User';

export default {
  Query: {
    allDirectMessages: () => DirectMessage.find()
  },
  Mutation: {
    createDirectMessage: async (_: any, args: any) => {
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
