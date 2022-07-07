const Joi = require("joi");
const mongoose = require("mongoose");
const { genreSchema } = require("./genre");

const Movie = mongoose.model(
  "Movies",
  new mongoose.Schema({
    practices: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    },
    genre: {
      type: genreSchema,
      required: true,
    },
    spotsOpen: {
      type: String,
      required: true,
      min: 0,
      max: 255,
    },
    dailyRentalRate: {
      type: String,
      required: true,
      min: 0,
      max: 255,
    },
  })
);

function validateMovie(movie) {
  const schema = {
    practices: Joi.string().min(5).max(50).required(),
    genreId: Joi.objectId().required(),
    spotsOpen: Joi.string().min(0).required(),
    dailyRentalRate: Joi.string().min(0).required(),
  };

  return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
