const express = require("express");
const genres = require("../routes/genres");
const practices = require("../routes/practices");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/genres", genres);
  app.use("/api/movies", practices);
};
