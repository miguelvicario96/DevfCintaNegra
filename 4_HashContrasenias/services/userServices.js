const User = require('../models/User');

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
    }
}