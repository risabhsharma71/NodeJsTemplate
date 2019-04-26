const express = require('express');

const feedController = require('../controllers/controller');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

router.post('/posts', feedController.createPost);

// POST /feed/post
router.post('/post', feedController.getPost);

module.exports = router;