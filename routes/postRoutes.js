const express = require("express");
const router = express.Router();
const { createPost, getPosts } = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");  // Note folder name: "middleware"

router.post("/", protect, createPost);
router.get("/", getPosts);

module.exports = router;
