const { app, PORT } = require('./server');

app.listen(PORT, (error) => !error ? `Server On Port ${PORT}` : console.error(error));