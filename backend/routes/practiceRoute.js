const { Practices, Disciplines } = require("../models/apiModel");
const express = require("express");
const router1 = express.Router();
const router2 = express.Router();

router1.get("/", async (req, res) => {
  const practices = await Practices.find().select("-__v").sort("name");
  res.send(practices);
});

router2.get("/", async (req, res) => {
  const disciplines = await Disciplines.find().select("-__v").sort("name");
  res.send(disciplines);
});

module.exports = router1;
module.exports = router2;
