// 3rd Party Imports
const router = require("express").Router();

// Controller Imports
const { addPet, getAllPets, getThisPet } = require("../controllers/pet");

// Utility Imports
const getCloudinaryConfig = require("../services/cloudinary.service");

// Middleware Imports
const protectRoute = require("../middlewares/routeProtect");

const upload = getCloudinaryConfig("pet");

router.post("/", upload.single("image"), addPet);

router.get("/", protectRoute, getAllPets);

router.get("/:petId", getThisPet);

module.exports = router;
