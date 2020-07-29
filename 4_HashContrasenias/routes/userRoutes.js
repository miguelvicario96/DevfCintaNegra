const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.create);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

//login
router.post('/users/login', userController.login);

module.exports = router;