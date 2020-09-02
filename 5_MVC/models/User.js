/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { postSchema } = require('./Post');

const SALT_FACTOR = 10;

const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  posts: [postSchema],
  is_active: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

userSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) return next();

  return bcrypt.genSalt(SALT_FACTOR, (errSalt, salt) => {
    if (errSalt) return next(errSalt);

    return bcrypt.hash(user.password, salt, (errHash, hash) => {
      if (errHash) return next(errHash);

      user.password = hash;
      return next();
    });
  });
});

const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;
