const { api, PORT } = require('./api');

api.listen(PORT, () => console.log(`Listening On Port ${PORT}`));
