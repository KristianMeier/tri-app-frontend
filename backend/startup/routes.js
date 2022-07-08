const express = require("express");
const disciplines = require("../routes/disciplineRoute");
const practices = require("../routes/practiceRoute");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/genres", disciplines);
  app.use("/api/movies", practices);
};
