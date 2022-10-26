// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const getGoals = (req, res) => {
    res.status(200).json({message: 'Get Goals'})
}
// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const setGoal = (req, res) => {
    res.status(200).json({message: 'Set Goals'})
}
// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const updateGoal = (req, res) => {
    res.status(200).json({message: 'Upate Goals ${req.params.id}'})
}
// @desc    Get goals
// @route   GET /api/goals
// @access  Private

const deleteGoal = (req, res) => {
    res.status(200).json({message: 'Delete Goals ${req.params.id}'})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
  }