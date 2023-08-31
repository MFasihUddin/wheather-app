const request = require("request");

const API_key = "22cfb203f26b4e9c9c08f8b37fec6d98";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_key}?units=metric`;

request({ url: url, json: true }, (error, response) => {
  console.log(response.body);
});

const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${API_key}`;

request({ url: url1, json: true }, (err, res) => {
  const latitude = res.body[0].lat;
  const longitude = res.body[0].lon;
  console.log(latitude, longitude);
});
