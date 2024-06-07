// routes/posts.js
const { Router } = require('express');
const postsCtrl = require('../controllers/posts');

const router = Router();

// GET all posts
router.get('/', postsCtrl.getAllPosts);

// GET a post by ID
router.get('/:id', postsCtrl.getPostById);

// PATCH or PUT route to update a post by ID
router.patch('/:id', postsCtrl.updatePost);

// DELETE route to delete a post by ID
router.delete('/:id', postsCtrl.deletePost);

module.exports = router;