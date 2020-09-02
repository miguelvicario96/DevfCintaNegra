const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  permissions: {
    type: String,
    enum: ['PUBLIC', 'PRIVATE'],
    default: 'PUBLIC',
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

const Post = mongoose.model('Post', postSchema, 'Posts');

module.exports = {
  Post,
  postSchema,
};
