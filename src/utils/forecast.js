const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=791224dff5317b7172cc26665252a6d1&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const description = body.current["weather_descriptions"][0];
      const temperature = body.current.temperature;
      const feelslike = body.current.feelslike;
      const windspeed = body.current.wind_speed;
      callback(
        undefined,
        `${description}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.The wind speed is ${windspeed} knots`
      );
    }
  });
};

module.exports = forecast;
