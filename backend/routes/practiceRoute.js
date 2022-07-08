const { Practices } = require("../models/movieModel");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const movies = await Practices.find().select("-__v").sort("name");
  res.send(movies);
});

module.exports = router;
