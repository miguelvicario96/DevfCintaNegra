const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: Number,
    isActive: {
        type: Boolean,
        default: true
    }
});

/*

phone: {
    type: Number
}

Si sólo definimos el tipo podemos dejarlo como:
phone: Number

*/

//Por detras, MongoDB convierte 'User' en 'users', y así se guarda en al base de datos
const User = mongoose.model('User', userSchema);

module.exports = User;