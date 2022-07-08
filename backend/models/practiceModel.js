const mongoose = require("mongoose");
const { disciplineSchema } = require("./disciplineModel");

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
      type: disciplineSchema,
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
