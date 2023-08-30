const request = require("req");

const url = "";

request({ url: url }, (error, response) => {
  console.log(response);
});
