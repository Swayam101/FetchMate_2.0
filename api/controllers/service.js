// Model Imports
const Service = require("../models/Service");

// Utility Imports
const asyncWrapper = require("../utils/asyncWrapper");
const CustomResponse = require("../utils/Response");

//      Controller Functions
exports.requestService = asyncWrapper(async (req, res, next) => {
  const { petSitter, pickUpTime, dropTime, petDetails, serviceType } = req.body;
  const status = "hanging";
  const user = req.user._id;
  const request = await Service.create({
    petParent: user,
    petSitter,
    pickUpTime,
    dropTime,
    petDetails,
    serviceType,
    status,
  });
  const response = new CustomResponse(
    true,
    { request },
    null,
    "request sent successfully"
  );
  res.json(response);
});

exports.getMyRequests = asyncWrapper(async (req, res, next) => {
  const user = req.user._id;
  const requests = await Service.find({ petSitter: user })
    .populate("petParent")
    .populate("petDetails");
  const response = new CustomResponse(
    true,
    { requests },
    null,
    "requests fetched successfully"
  );
  res.status(200).json(response);
});

exports.checkRequestStatus = asyncWrapper(async (req, res, next) => {
  const user = req.user._id;
  const request = await Service.find({ petParent: user });
  const response = new CustomResponse(
    true,
    { request },
    null,
    "request status fetched successfully"
  );
  res.status(200).json(response);
});

exports.respondToRequest = asyncWrapper(async (req, res, next) => {
  const { decision, reqId } = req.params;
  const request = await Service.findByIdAndUpdate(
    reqId,
    { status: decision },
    { new: true }
  );
  const response = new CustomResponse(
    true,
    { request },
    null,
    "request responded successfully"
  );
  res.status(200).json(response);
});

exports.deleteRequest = asyncWrapper(async (req, res, next) => {
  const { reqId } = req.params;
  const result = await Service.findByIdAndDelete(reqId, { new: true });
  const response = new CustomResponse(
    true,
    { result },
    null,
    "request deleted successfully"
  );
  res.status(200).json(response);
});
