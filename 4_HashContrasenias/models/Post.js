const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true 
    },
    body: {
        type: String,
        required: true
    },
    image: String,
    date: {
        type: Date,
        default: Date.now()
    },
    permissions: {
        type: String,
        enum: ['PUBLIC', 'PRIVATE'],
        default: 'PUBLIC'
    }
});

const Post = new mongoose.model('Post', postSchema);

module.exports = {
    Post,
    postSchema
};