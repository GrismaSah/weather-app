app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const express = require("express");
const logger = require("./middleware/logger");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/api/weather", weatherRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});