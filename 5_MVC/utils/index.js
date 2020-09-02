const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  comparePasswords: (savedPassword, introducedPassword) => {
    return bcrypt.compareSync(introducedPassword, savedPassword);
  },
  createToken: (user) => {
    const payload = {
      first_name: user.first_name,
      // eslint-disable-next-line no-underscore-dangle
      id: user._id,
      email: user.email,
    };

    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' });
      return token;
    } catch (err) {
      return undefined;
    }
  },
};
