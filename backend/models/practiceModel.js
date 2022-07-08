const mongoose = require("mongoose");

const disciplineSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Disciplines = mongoose.model("Disciplines", disciplineSchema);

const Practices = mongoose.model(
  "movies",
  new mongoose.Schema({
    practices: { type: String, required: true },
    discipline: { type: disciplineSchema, required: true },
    spotsOpen: { type: String, required: true },
    hasSigned: { type: String },
  })
);

exports.Disciplines = Disciplines;
exports.Practices = Practices;
