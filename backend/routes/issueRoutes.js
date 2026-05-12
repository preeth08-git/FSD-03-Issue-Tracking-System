const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createIssue,
  getMyIssues,
  getAllIssues,
  updateIssueStatus,
} = require("../controllers/issueController");


// CREATE ISSUE
router.post("/", authMiddleware, createIssue);


// GET MY ISSUES
router.get("/myissues", authMiddleware, getMyIssues);


// GET ALL ISSUES
router.get("/", authMiddleware, getAllIssues);


// UPDATE ISSUE STATUS
router.put("/:id", authMiddleware, updateIssueStatus);


module.exports = router;