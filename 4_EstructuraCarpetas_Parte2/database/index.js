const mongoose = require('mongoose');
const bdURI = 'mongodb+srv://admin:root@cluster0.khmba.mongodb.net/devf_cintanegra?retryWrites=true&w=majority';

mongoose.connect(bdURI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => !err ? console.info('Database Connected') : console.error(error));

module.exports = mongoose;