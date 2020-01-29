const request = require('request');
const dskey = process.env.DARKSKY_API_KEY;

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/${dskey}/${latitude},${longitude}`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        response.body.daily.data[0].summary +
          'It is currently ' +
          response.body.currently.temperature +
          ' degrees out. There is a ' +
          response.body.currently.precipProbability +
          '% chance of rain.'
      );
    }
  });
};

module.exports = forecast;
