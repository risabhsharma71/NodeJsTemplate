const express = require('express');

const feedController = require('../controllers/controller');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
router.get('/posts',isAuth, feedController.getPosts);

router.post('/posts',isAuth, feedController.createPost);

// POST /feed/post
router.post('/post',isAuth, feedController.getPost);

module.exports = router;