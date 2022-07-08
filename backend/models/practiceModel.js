const mongoose = require("mongoose");
const { disciplineSchema } = require("./disciplineModel");

const Practices = mongoose.model(
  "movies",
  new mongoose.Schema({
    practices: {
      type: String,
      required: true,
      trim: true,
    },
    discipline: {
      type: disciplineSchema,
      required: true,
    },
    spotsOpen: {
      type: String,
      required: true,
    },
    hasSigned: {
      type: String,
      required: true,
    },
  })
);

exports.Practices = Practices;
