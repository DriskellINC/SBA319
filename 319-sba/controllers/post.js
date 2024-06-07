//posts for my controllers
const Post = require('../models/post');

// Get all posts
async function getAllPosts(req, res) {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Get a post by ID
async function getPostById(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update a post by ID
async function updatePost(req, res) {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Delete a post by ID
async function deletePost(req, res) {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};