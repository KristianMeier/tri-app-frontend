const { Disciplines } = require("../models/discipline");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const disciplines = await Disciplines.find().select("-__v").sort("name");
  res.send(disciplines);
});

module.exports = router;
