require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use(logger);

app.use("/api/weather", weatherRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});