const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Name is mandatory
  },
  email: {
    type: String,
    required: true,
    unique: true,     // Ensure no duplicate emails
  },
  password: {
    type: String,
    required: true,   // Password is mandatory
  },
  bio: {
    type: String,
    default: "",      // Bio is optional, defaults to empty string
  },
}, {
  timestamps: true,   // Automatically adds createdAt and updatedAt
});

module.exports = mongoose.model("User", userSchema);
