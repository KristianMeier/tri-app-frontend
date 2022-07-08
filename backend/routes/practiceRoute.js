const { Practices } = require("../models/practiceModel");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const practices = await Practices.find().select("-__v").sort("name");
  res.send(practices);
});

module.exports = router;
