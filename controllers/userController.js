const User = require("../models/user");
const Post = require("../models/post");

// Get user profile by ID, including user's posts
exports.getUserProfile = async (req, res) => {
  try {
    // Find the user by ID, exclude password field
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find posts authored by this user, sorted newest first
    const posts = await Post.find({ author: user._id }).sort({ createdAt: -1 });

    // Respond with user info and posts
    res.json({ user, posts });
  } catch (error) {
    // Handle any server errors
    res.status(500).json({ message: error.message });
  }
};
