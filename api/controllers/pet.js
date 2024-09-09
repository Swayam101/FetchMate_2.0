// Model Imports
const Pet = require("../models/Pet");

// Utility Imports
const asyncWrapper = require("../utils/asyncWrapper");

exports.addPet = asyncWrapper(async (req, res, next) => {
  const { name, petType, breed, gender, description } = req.body;
  const petParent = req.user._id;

  const imageUrl = req.file?.path;

  if (!imageUrl) next(new Error("Pet Image Is Required!"));

  const pet = await Pet.create({
    name,
    petType,
    breed,
    gender,
    description,
    petParent,
    imageUrl,
  });

  const response = new CustomResponse(
    true,
    { pet },
    null,
    "pet added successfully"
  );

  res.status(200).json(response);
});

exports.getAllPets = asyncWrapper(async (req, res, next) => {
  const user = req.user._id;
  const pets = await Pet.find({ petParent: user });
  const response = new CustomResponse(
    true,
    { pets },
    null,
    "pets fetched successfully!"
  );
  res.status(200).json(response);
});

exports.getThisPet = asyncWrapper(async (req, res, next) => {
  const petId = req.params.petId;
  const pet = await Pet.find({ _id: petId });
  const response = new CustomResponse(
    true,
    { pet },
    null,
    "pet fetched successfully"
  );
  res.status(200).json(response);
});
