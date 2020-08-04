const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_FACTOR = 10;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true //email no se puede repetir
    },
    password: {
        type: String,
        required: true
    },
    photo: String,
    isActive: {
        type: Boolean,
        default: true
    }
}, {timestamps:true});

//aqui no se puede usar un arrow function, ya que no entienden el this
userSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }

            user.password = hash;
            next();
        });
    });
});

const User = new mongoose.model('User', userSchema);

module.exports = User;