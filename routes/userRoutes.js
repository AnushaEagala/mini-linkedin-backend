const express = require("express");
const router = express.Router();
const { getUserProfile } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware"); // Note folder name: "middleware"

router.get("/:id", protect, getUserProfile);

module.exports = router;
