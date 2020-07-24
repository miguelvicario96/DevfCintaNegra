const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    existencia: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;