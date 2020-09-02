const express = require('express');

const router = express.Router();
const { PostValidator } = require('../validators');
const { PostController } = require('../controllers');

router.post('/users/:id/posts', PostValidator.create, PostController.create);
router.get('/users/:id/posts', PostValidator.findAll, PostController.findAll);
router.get('/users/:id/posts/:idPost', PostValidator.findOne, PostController.findOne);
router.patch('/users/:id/posts/:idPost', PostValidator.updateOne, PostController.updateOne);
router.delete('/users/:id/posts/:idPost', PostValidator.deleteOne, PostController.deleteOne);

module.exports = router;
