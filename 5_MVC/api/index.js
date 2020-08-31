const express = require('express');
const { errors } = require('celebrate');
const middlewares = require('../middlewares');

const api = express();
const PORT = process.env.PORT || 3000;

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));
api.use(middlewares.showDate);

api.get('/', (req, res) => res.send(`Hello World`));
api.use(require('../routers'));

api.use(errors());

module.exports = {
  api,
  PORT,
};
