const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: [2, "Name Should Have At Least 2 Characters"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid Email Address"],
  },
  DOB: {
    type: Date,
    required: true,
    max:[()=>Date.now(),"Invalid Birth Date!"]
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        if (value.length != 10) return false;
        return true;
      },
      message: "Invalid Mobile Number",
    },
  },
  alternateMobile: {
    type: String,
    validate: {
      validator: (value) => {
        if (value.length != 10) return false;
        return true;
      },
      message: "Invalid Alternate Mobile Number",
    },
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: [5, "Password Should Be Atleast 5 Characters Long"],
  },
  profileUrl: {
    type: String,
  },
  roles: [
    {
      type: String,
      enum: ["buyer", "petSitter", "petParent"],
      required: true,
    },
  ],
});

module.exports = model("User", userSchema);
