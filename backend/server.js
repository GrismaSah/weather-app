const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Weather Backend is running!");
});

app.get("/api/weather", (req, res) => {
  const city = req.query.city;

  res.json({
    city: city,
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    wind: 12
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});