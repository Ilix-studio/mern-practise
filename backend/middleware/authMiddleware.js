const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //when the token is send to the headers it attched to req.headers.authorization
      //From req.headers.authorization we need to get the token from header
      //And req.headers.authorization comes with two part Bearer and token
      //Seperate them by using split array method
      token = req.headers.authorization.split(" ")[1];
      //Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //Now get the user from the token
      //And we set the id in generateToken function
      //And we can used emal to if we want
      req.user = await User.findById(decoded.id).select("-password");
      //then call next function
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  //if no token then throw error
  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});
module.exports = {protect};

//checking for the authorization header making sure that it is bearer token
// And signing the token with variable and decoding and verifying the token
// Getting the user from the token, calling the next middleware function
// And something goes wrong then throwing error
// and if no token then throw error too
// used in the route file to protect the routes 
