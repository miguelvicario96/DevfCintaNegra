const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const middleware = require('../middleware')

router.post('/users', userController.create);
router.post('/users/login', userController.login); //login

router.use(middleware.validateToken) //rutas por debajo quedan protegidas por el middleware de validateToken
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);


module.exports = router;