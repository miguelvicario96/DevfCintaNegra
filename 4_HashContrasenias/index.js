require('dotenv').config();
const { app, PORT } = require('./server/');
require('./database');

app.listen(PORT, (error) => !error ? console.info(`Server On Port ${PORT}`) : console.error(error));