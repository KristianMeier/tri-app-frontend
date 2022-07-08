const { Practices, Disciplines } = require("../models/apiModel");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const practices = await Practices.find().select("-__v").sort("name");
  res.send(practices);
});

router.get("/", async (req, res) => {
  const disciplines = await Disciplines.find().select("-__v").sort("name");
  res.send(disciplines);
});

module.exports = router;
