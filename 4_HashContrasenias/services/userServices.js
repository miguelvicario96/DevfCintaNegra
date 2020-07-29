const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    create: (body) => {
        const newUser = new User(body);
        return newUser.save();
    },
    getUsers: () => {
        const users = User.find({isActive:true});
        return users;
    },
    getUser: (id) => {
        const user = User.findById(id);
        return user;
    },
    updateUser: (user, body) => {
        Object.assign(user, body);
        return user.save();
    },
    findUserByEmail: (userEmail) => {
        return User.findOne({email:userEmail});
    },
    comparePasswords: (password, savedPassword) => {
        return bcrypt.compareSync(password, savedPassword);
    }
}