const express = require('express');
const morgan = require('morgan');
const { errors } = require('celebrate');

const api = express();
const PORT = process.env.PORT || 3000;

api.use(morgan('dev'));
api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));

api.get('/', (req, res) => res.send('Hello World'));
api.use('/api/v1', require('../routers'));

api.use(errors());

module.exports = {
  api,
  PORT,
};
