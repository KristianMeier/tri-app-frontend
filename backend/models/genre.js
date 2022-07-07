const Joi = require("joi");
const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Disciplines = mongoose.model("Disciplines", genreSchema);

function validateDisciplines(discipline) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(discipline, schema);
}

exports.genreSchema = genreSchema;
exports.Disciplines = Disciplines;
exports.validate = validateDisciplines;
