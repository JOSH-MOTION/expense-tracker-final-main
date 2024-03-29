const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}




// const clearUserData = async (userId) => {
//   try {
    // Implement your logic to clear user data
    // Example: User.deleteMany({ userId });
//   } catch (error) {
//     throw new Error('Error clearing user data: ' + error.message);
//   }
// };

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

const logoutUser = async (req, res) => {
  // No need to clear user data on logout if you want each user to have different data entered
  res.status(200).json({ message: 'User logged out successfully' });
};

// This function fetches data associated with the authenticated user
const getUserData = async (req, res) => {
  try {
    // Assuming the authenticated user's ID is available in req.user._id
    const userId = req.user._id;

    // Fetch data from the database associated with the user
    // Example: const userData = await DashboardDataModel.find({ userId });

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
};
module.exports = { signupUser, loginUser, logoutUser, getUserData };