const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageLink: {
    type: String,
  },
  category: {
    type: String,
    enum: ["food", "skincare", "haircare"],
  },
  stock: {
    type: Number,
    required: true,
    min: [1, "There shoul be atleast one Stock of the product"],
  },
});

module.exports = model("Product", productSchema);
