const Joi = require("joi");
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

function validatePractices(movie) {
  const schema = {
    practices: Joi.string().min(5).max(50).required(),
    disciplinId: Joi.objectId().required(),
    spotsOpen: Joi.string().min(0).required(),
    hasSigned: Joi.string().min(0).required(),
  };

  return Joi.validate(movie, schema);
}

exports.Practices = Practices;
exports.validate = validatePractices;
