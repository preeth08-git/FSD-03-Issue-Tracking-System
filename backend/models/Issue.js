const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  priority: {
    type: String,
    enum: ["LOW", "MEDIUM", "HIGH"],
    default: "LOW",
  },

  status: {
    type: String,
    enum: ["OPEN", "IN_PROGRESS", "RESOLVED"],
    default: "OPEN",
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model("Issue", issueSchema);