const Issue = require("../models/Issue");


// CREATE ISSUE
exports.createIssue = async (req, res) => {

  try {

    const {
      title,
      description,
      priority,
    } = req.body;

    const issue = await Issue.create({
      title,
      description,
      priority,
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Issue created successfully",
      issue,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// GET MY ISSUES
exports.getMyIssues = async (req, res) => {

  try {

    const issues = await Issue.find({
      createdBy: req.user.id,
    });

    res.status(200).json(issues);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// GET ALL ISSUES (ADMIN)
exports.getAllIssues = async (req, res) => {

  try {

    const issues = await Issue.find()
      .populate("createdBy", "name email");

    res.status(200).json(issues);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// UPDATE ISSUE STATUS
exports.updateIssueStatus = async (req, res) => {

  try {

    const { status } = req.body;

    const issue = await Issue.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json({
      message: "Issue updated successfully",
      issue,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};