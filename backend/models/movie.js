const mongoose = require("mongoose");
const { genreSchema } = require("./genre");

const Practices = mongoose.model(
  "movies",
  new mongoose.Schema({
    practices: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    },
    discipline: {
      type: genreSchema,
      required: true,
    },
    spotsOpen: {
      type: String,
      required: true,
      min: 0,
      max: 255,
    },
    hasSigned: {
      type: String,
      required: true,
      min: 0,
      max: 255,
    },
  })
);

exports.Practices = Practices;
