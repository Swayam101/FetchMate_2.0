// Model Imports
const User=require('../models/User')

// Utility Imports
const asyncWrapper = require("../utils/asyncWrapper");


module.exports=asyncWrapper(async (req,res,next)=>{
    const userId=req.user._id
    const user=await User.findById(userId)
    if(!user.roles.includes("petSitter"))  return next(new Error("Only Pet Sitters Allowed To Acess This Resource"))
    next()
})