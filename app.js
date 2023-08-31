const request = require("request");

const API_KEY = "22cfb203f26b4e9c9c08f8b37fec6d98";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`;

request({ url: url }, (error, response) => {
  console.log(response);
});
