// 3rd Party Imports
const router = require("express").Router();

// Controller Imports
const {
  requestService,
  getMyRequests,
  checkRequestStatus,
  respondToRequest,
  deleteRequest
} = require("../controllers/service");

// Middleware Imports
const checkPetSitter = require("../middlewares/checkPetSitter");


router.post("/", requestService);

router.get("/", checkPetSitter, getMyRequests);

router.get("/me/petsitter", checkRequestStatus);

router.post("/:reqId/:decision",checkPetSitter,respondToRequest);

router.delete("/:reqId",checkPetSitter,deleteRequest)


module.exports = router;
