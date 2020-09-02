const express = require('express');
const Middlewares = require('../middlewares');

const router = express.Router();

// Public
router.use(require('./AuthRouter'));
router.use(require('./UserRouter'));

// Private
router.use(Middlewares.verifyToken);
router.use(require('./PostRouter'));

module.exports = router;
