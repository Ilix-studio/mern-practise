const asyncHandler = require("express-async-handler");
const Goal = require("./../models/goalModel");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc    create goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc    update goals
// @route   PUT /api/goals/ID
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  // jodi goal nai database ot respond 400 kori dibi 400
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  //jodi ase bisari update kori dibi
  //findByIdAndUpdate thakibo argument tini ta, id, body, new = true
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  // respond kori dibi with updated goal
  res.status(200).json(updatedGoal);
});

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  // jodi goal nai database ot respond 400 kori dibi 400
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  await goal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
