// Model Imports
const User = require("../models/User");

// Third Party Package Imports
const jwt = require("jsonwebtoken");
require("dotenv").config();


// Controller Functions
module.exports = protectRoute = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId).select([
        "_id",
        "name",
        "email",
      ]);
      
      req.user=user
      next();
    }
  } catch (error) {
    res.status(401);
    next(error);
  }
  if (!token) next(new Error("JsonWebTokenError"));
};


