const express = require("express");
const genres = require("../routes/disciplineRoute");
const practices = require("../routes/practiceRoute");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/genres", genres);
  app.use("/api/movies", practices);
};
