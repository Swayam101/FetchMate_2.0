// 3rd Party Imports
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const router = require("express").Router();

// Middleware Imports
const protectRoute = require("../middlewares/routeProtect");

// Controller Imports
const { logInUser, signUpUser, addUserImage,becomePetSitter,getLocalPetSitter } = require("../controllers/auth");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "users",
  },
});

const upload = multer({ storage });

router.post("/signup", signUpUser);

router.post("/login", logInUser);

router.post(
  "/add-profile",
  protectRoute,
  upload.single("profile"),
  addUserImage
);

router.get('/same-city',protectRoute,getLocalPetSitter)

router.post("/be-petsitter",protectRoute,becomePetSitter)

module.exports = router;
