const express = require('express');
const router = express.Router();
const { postValidator } = require('../validators')

router.post('/users/:idUser/login', postValidator.create, );