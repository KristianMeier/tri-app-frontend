const { Practices, validate } = require("../models/movie");
const { Disciplines } = require("../models/genre");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const moment = require("moment");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const movies = await Practices.find().select("-__v").sort("name");
  res.send(movies);
});

module.exports = router;
