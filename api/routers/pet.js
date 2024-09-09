const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// 3rd Party Imports
const router = require("express").Router();

// Controller Imports
const { addPet, getAllPets, getThisPet } = require("../controllers/pet");

// Utility Imports
const getCloudinaryConfig = require("../utils/cloudinary");

// Middleware Imports
const protectRoute=require('../middlewares/routeProtect')



const upload = getCloudinaryConfig("pet")

router.post("/", upload.single("image"), addPet);

router.get("/", protectRoute,getAllPets);

router.get("/:petId", getThisPet);

// router.get('/')

module.exports = router;
