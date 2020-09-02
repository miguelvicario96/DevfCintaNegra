const { UserService } = require('../services');
const { PostService } = require('../services');

module.exports = {
  create: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserService.findOneById(id);
      if (!user) res.status(404).json({ message: 'User Dont Exist' });
      const post = await PostService.create(req.body);
      const userWithPost = await PostService.addPostToUser(user, post);
      res.status(201).json(userWithPost);
    } catch (err) {
      res.status(400).json({ message: 'Error Adding Post To User' });
    }
  },
  findAll: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserService.findOneById(id);
      if (!user) res.status(404).json({ message: 'User Dont Exist' });
      const posts = await PostService.getPostsInUser(user);
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json({ message: 'Error Getting User Posts', error });
    }
  },
  findOne: async (req, res) => {
    const { id, idPost } = req.params;
    try {
      const user = await UserService.findOneById(id);
      if (!user) res.status(404).json({ message: 'User Dont Exist' });
      const post = PostService.findOneByIdInUser(idPost, user);
      if (!post) res.status(404).json({ message: 'Post Not Found' });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ message: 'Error Getting User Post By ID', error });
    }
  },
  updateOne: async (req, res) => {
    const { id, idPost } = req.params;
    const { body } = req;
    try {
      const user = await UserService.findOneById(id);
      if (!user) res.status(404).json({ message: 'User Dont Exist' });
      const post = PostService.findOneByIdInUser(idPost, user);
      if (!post) res.status(404).json({ message: 'Post Not Found' });
      const updatedUser = await PostService.updateOneByIdInUser(idPost, user, body);
      res.status(200).json(updatedUser.posts.id(idPost));
    } catch (error) {
      res.status(400).json({ message: 'Error Updating User Post By ID', error });
    }
  },
  deleteOne: async (req, res) => {
    const { id, idPost } = req.params;
    try {
      const user = await UserService.findOneById(id);
      if (!user) res.status(404).json({ message: 'User Dont Exist' });
      const post = PostService.findOneByIdInUser(idPost, user);
      if (!post) res.status(404).json({ message: 'Post Not Found' });
      await PostService.updateOneByIdInUser(idPost, user, { is_active: false });
      res.status(204).json();
    } catch (error) {
      res.status(400).json({ message: 'Error Deleting User Post By ID', error });
    }
  },
};
