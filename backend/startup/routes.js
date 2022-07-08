const express = require("express");
const disciplines = require("../routes/apiRoute");
const practices = require("../routes/apiRoute");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/genres", disciplines);
  app.use("/api/movies", practices);
};
