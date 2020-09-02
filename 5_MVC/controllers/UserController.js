const { UserService } = require('../services');
const Utils = require('../utils');

module.exports = {
  create: async (req, res) => {
    const { email } = req.body;
    try {
      const userExists = await UserService.findOnyByEmail(email);
      if (userExists) res.status(400).json({ message: 'Email Already Taken' });
      const user = await UserService.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  findAll: async (req, res) => {
    try {
      const users = await UserService.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserService.findOneById(id);
      if (!user) res.status(404).json({ message: 'User Not Found' });
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const user = await UserService.findOneById(id);
      if (!user) res.status(404).json({ message: 'User Not Found' });
      const modifiedUser = await UserService.updateOne(user, body);
      res.status(200).json(modifiedUser);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserService.findOneById(id);
      if (!user) res.status(404).json({ message: 'User Not Found' });
      await UserService.updateOne(user, { is_active: false });
      res.status(204).json();
    } catch (err) {
      res.status(400).json(err);
    }
  },
  signup: async (req, res) => {
    const { email } = req.body;
    try {
      const userExists = await UserService.findOnyByEmail(email);
      if (userExists) res.status(400).json({ message: 'Email Already Taken' });
      const user = await UserService.create(req.body);
      user.password = undefined;
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserService.findOnyByEmail(email);
      if (!user) res.status(400).json({ message: 'Credentials Error' });
      const isValid = Utils.comparePasswords(user.password, password);
      if (!isValid) res.status(400).json({ message: 'Passwords Dont Match' });
      const token = Utils.createToken(user);
      if (!token) res.status(500).json({ message: 'Error On Token Creation' });
      res.status(200).json({ message: 'Login Successful', token });
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
