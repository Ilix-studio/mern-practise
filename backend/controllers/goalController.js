const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Goals'})
})
// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const setGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Set Goals'})
})
// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Update Goals ${req.params.id}'})
})
// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Delete Goals ${req.params.id}'})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
  }