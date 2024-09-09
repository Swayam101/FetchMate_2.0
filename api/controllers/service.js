// Model Imports
const Service = require("../models/Service");

// Utility Imports
const asyncWrapper = require("../utils/asyncWrapper");


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
  res.json({status:true,request});
});

exports.getMyRequests = asyncWrapper(async (req, res, next) => {
  const user = req.user._id;
  const requests = await Service.find({ petSitter: user }).populate('petParent').populate('petDetails');
  res.json({ status: true, requests });
});

exports.checkRequestStatus = asyncWrapper(async (req, res, next) => {
  const user = req.user._id;
  const request = await Service.find({ petParent: user });
  res.json({ status: true, request });
});

exports.respondToRequest = asyncWrapper(async (req, res, next) => {
  const { decision, reqId } = req.params;
  const request = await Service.findByIdAndUpdate(
    reqId,
    { status: decision },
    { new: true }
  );
  res.json(request);
});

exports.deleteRequest=asyncWrapper(async (req,res,next)=>{
    const {reqId}=req.params
    const result=await Service.findByIdAndDelete(reqId,{new:true})
    console.log(result);
    res.json({status:true,message:"Request Deleted Successfully!"})
})
