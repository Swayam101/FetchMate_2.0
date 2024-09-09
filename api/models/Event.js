const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: {
    type: String,
    required: [true, "Event Must Have A Title"],
  },
  venue: {
    type: String,
    required: [true, "Event Must Have A Venue"],
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  description: {
    type: String,
    min: [15, "Description Must Be atleast 15 Characters Long"],
    min: [50, "Description Can Be atmost 15 Characters Long"],
  },
});

module.exports = model("Events", eventSchema);
