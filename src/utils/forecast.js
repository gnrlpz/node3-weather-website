const request = require("postman-request");

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=551d0469742dbc4f466fdcd171962d20&query=${lat},${long}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service.");
    } else if (body.error) {
      callback("Unable to find location!");
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}°F out. It feels like ${body.current.feelslike}°F out. The humidity is ${body.current.humidity}%.`
      );
    }
  });
};

module.exports = forecast;
