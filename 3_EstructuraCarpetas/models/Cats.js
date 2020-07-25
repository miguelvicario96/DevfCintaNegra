const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name:{
        type: String,
        required
    },
    breed: String,
    age: Number,
    isActive:{
        type: Boolean,
        default: true
    }
}, {timestamps: true}); //Guarda la fecha de creación y las modificaciones

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;