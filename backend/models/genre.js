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

exports.genreSchema = genreSchema;
exports.Disciplines = Disciplines;
