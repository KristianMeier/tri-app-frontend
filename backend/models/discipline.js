const mongoose = require("mongoose");

const disciplineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Disciplines = mongoose.model("Disciplines", disciplineSchema);

exports.disciplineSchema = disciplineSchema;
exports.Disciplines = Disciplines;
