const mongoose = require('mongoose');
const bdURI = process.env.bdURI;

mongoose.connect(bdURI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => !err ? console.info('Database Connected') : console.error(error));

module.exports = mongoose;