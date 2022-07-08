const { Disciplines } = require("../models/disciplineModel");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const genres = await Disciplines.find().select("-__v").sort("name");
  res.send(genres);
});

module.exports = router;
