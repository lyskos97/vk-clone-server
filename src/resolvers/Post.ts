import Post from '../models/Post';
import User from '../models/User';

type CreatePostArgs = {
  record: {
    text: string;
    authorId: number;
  };
};

export default {
  Query: {
    allPosts: () => Post.find({ relations: ['author'] })
  },
  Mutation: {
    createPost: async (_: any, args: CreatePostArgs) => {
      const { authorId, ...postData } = args.record;
      const post = Post.create(postData);
      const author = await User.findOne(authorId);
      post.author = author;

      return post.save();
    }
  }
};
