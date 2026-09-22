const express = require("express");

const {
  getWeather,
  createWeather,
  updateWeather,
  deleteWeather
} = require("../controllers/weatherController");

const router = express.Router();

router.get("/", getWeather);

router.post("/", createWeather);

router.put("/:id", updateWeather);

router.delete("/:id", deleteWeather);

module.exports = router;