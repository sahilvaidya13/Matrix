const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET ALL JOBS");
});

router.get("/:id", (req, res) => {
  res.send("Indiv Prod");
});

module.exports = router;
