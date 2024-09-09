// Utility Imports
const CustomResponse = require("../utils/Response");

module.exports = async (error, req, res, next) => {

  if (error.name == "JsonWebTokenError" || error.message=="JsonWebTokenError") {
    const err = new CustomResponse(
      false,
      null,
      error.message,
      "You need to sign in to proceed."
    );
    return res.json(err);
  }


  if (error.code == 11000) {
    const collection = error.message
      .split(" ")[5]
      .split(".")[1]
      .slice(0, -1)
      .toUpperCase();
    const key = Object.keys(error.keyPattern)[0];
    const response = new CustomResponse(
      false,
      null,
      error,
      `${collection} with this ${key} Already Exists`
    );
    return res.json(response);
    
  } 
  if (error.name===("ValidationError")) {
    const feilds = Object.keys(error.errors);
    const validationErrors = [];
    feilds.forEach((value) => {
      const errMsg=error.errors[value].message.replace("Path"," ").replace("`","").replace("`","")
      validationErrors.push(`${errMsg}`);
    });
    return res.json(
      new CustomResponse(
        false,
        null,
        validationErrors,
        validationErrors[0]
      )
    );

  }
  console.log(error.name);
  res.json(new CustomResponse(false, null,error,error.message));
};
