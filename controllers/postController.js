const Post = require("../models/post");

// Create a new post
exports.createPost = async (req, res) => {
  const { content } = req.body;

  if (!content) return res.status(400).json({ message: "Post content required" });

  try {
    const post = await Post.create({
      author: req.user._id,  // From auth middleware
      content,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all posts (home feed)
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name")
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
