const asyncHandler = require("express-async-handler");
const Goal = require("./../models/goalModel");
const User = require("./../models/userModel");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
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
    user: req.user.id,
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
  // jodi Auth connection used koro that user model r pora link kori dibi
  const user = await User.findById(req.user.id)
  // check user exist or not in db
  if(!user){
    res.status(401);
    throw new Error("User not found")
  }
  //check for that user cannot update each other goal or loggin user match the goal user
  if(goal.user.toString() !== user.id){
    res.status(401);
    throw new Error("User not authorized")
  }
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
  const user = await User.findById(req.user.id)
  // check user exist or not in db
  if(!user){
    res.status(401);
    throw new Error("User not found")
  }
  //check for that user cannot update each other goal or loggin user match the goal user
  if(goal.user.toString() !== user.id){
    res.status(401);
    throw new Error("User not authorized")
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
