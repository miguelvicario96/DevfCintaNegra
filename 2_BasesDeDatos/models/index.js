const mongoose = require('mongoose');
const User = require('./User');

//Hay que agregar la contraseña y el nombre de la bd
//mongodb+srv://admin:<password>@cluster0.khmba.mongodb.net/<dbname>?retryWrites=true&w=majority
const bdURI = 'mongodb+srv://admin:root@cluster0.khmba.mongodb.net/devf_cintanegra?retryWrites=true&w=majority';

mongoose.connect(bdURI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => !err ? console.info('Database Connected') : console.error(error));

module.exports = { User }