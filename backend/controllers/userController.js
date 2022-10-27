// @desc    create user
// @route   POST /api/users
// @access  Public

const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

// @desc    Auth user
// @route   POST /api/users/login
// @access  Public

const loginUser = (req, res) => {
    res.json({message: 'Login User'})
}

// @desc    get user
// @route   GET /api/users/me
// @access  Public

const getMe = (req, res) => {
    res.json({message: ' User Data'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}