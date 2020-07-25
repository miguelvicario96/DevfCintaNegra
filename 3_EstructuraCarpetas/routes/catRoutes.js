const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

router.post('/cats', catController.create);

module.exports = router;