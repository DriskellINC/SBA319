const { Schema, model } = require('mongoose');

//post schemas

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  comments: [
    {
      content: String,

    },
  ],
});

// Create the Model that will control this collection
const Post = model('Post', postSchema);

module.exports = Post;