const getWeather = (req, res) => {
  const city = req.query.city;

  res.status(200).json({
    city: city,
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    wind: 12
  });
};

module.exports = { getWeather };