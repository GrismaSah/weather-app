let weatherData = [
  {
    id: 1,
    city: "Bangalore",
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    wind: 12
  }
];

const getWeather = (req, res) => {
  res.status(200).json(weatherData);
};

const createWeather = (req, res) => {
  const newWeather = {
    id: weatherData.length + 1,
    ...req.body
  };

  weatherData.push(newWeather);

  res.status(201).json(newWeather);
};

const updateWeather = (req, res) => {
  const id = Number(req.params.id);

  const weather = weatherData.find(item => item.id === id);

  if (!weather) {
    return res.status(404).json({ message: "Weather not found" });
  }

  Object.assign(weather, req.body);

  res.status(200).json(weather);
};

const deleteWeather = (req, res) => {
  const id = Number(req.params.id);

  weatherData = weatherData.filter(item => item.id !== id);

  res.status(200).json({ message: "Weather deleted" });
};

module.exports = {
  getWeather,
  createWeather,
  updateWeather,
  deleteWeather
};