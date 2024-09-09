// 3rd Party Package Imports
const bcrypt = require("bcrypt");

// Model Imports
const User = require("../models/User");

// Utility Imports
const CustomResponse = require("../utils/Response");
const asyncWrapper = require("../utils/asyncWrapper");
const { signAccessToken } = require("../utils/signToken");

//      Controller Functions

exports.signUpUser = asyncWrapper(async (req, res, next) => {
  const {
    name,
    email,
    phoneNumber,
    altNumber,
    password,
    petSitter,
    country,
    city,
    address,
    DOB,
    state,
    terms,
  } = req.body;

  if (!terms) throw new Error("Please Accept The Terms And Conditions");

  const roles = [];
  roles.push("buyer");
  roles.push("petParent");
  if (petSitter) roles.push("petSitter");
  const hashedPassword = await bcrypt.hash(password, 2);
  const user = await User.create({
    name,
    email,
    mobile: phoneNumber,
    alternateMobile: altNumber,
    roles,
    password: hashedPassword,
    country,
    city,
    address,
    DOB,
    state,
  });
  user.password = "*****";
  console.log(user);
  const response = new CustomResponse(true, user, null, "Sign Up Successful!");
  res.status(200).json(response);
});

exports.logInUser = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User Does Not Exists!");
  const isPassword = await bcrypt.compare(password, user.password);
  if (!isPassword) throw new Error("Invalid Password!");

  const accessToken = await signAccessToken(user.id);
  const responseUser = await User.findOne({ email }).select(["-password"]);

  // req.user = responseUser;
  res.json({ accessToken, responseUser,status:true });
});

exports.addUserImage = asyncWrapper(async (req, res, next) => {
  const user = req.user._id;

  const url = req.file.path;

  const newDetails = await User.findByIdAndUpdate(
    user,
    {
      profileUrl: url,
    },
    {
      new: true,
    }
  );

  res.json(newDetails);
});

exports.becomePetSitter = asyncWrapper(async (req, res, next) => {
  const user = req.user._id;
  const newUser = await User.findByIdAndUpdate(
    user,
    {
      roles: ["buyer", "petSitter", "petParent"],
    },
    { new: true }
  );

  res.json({status:true,newUser});
});


exports.getLocalPetSitter=asyncWrapper(async (req,res,next)=>{
  const user=req.user._id
  const result=await User.aggregate([
    {$match:{_id:user}},
    {$project:{_id:0,city:1}},
    {
      $lookup:{
        from:'users',
        localField:'city',
        foreignField:'city',
        as:'sameCity'
      }
    },
    {$unwind:'$sameCity'},
    {
      $project:{
        'sameCity.name':1,
        'sameCity.city':1,
        'sameCity.profileUrl':1,
        'sameCity._id':1
      }
    }
  ])
  const sliced=result.slice(0,5)

  res.json({status:true,locals:sliced})
}
)