const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({message: 'Server On'});
});

router.use(require('./userRoutes'));

module.exports = router;