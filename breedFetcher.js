const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const API = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(API, (error, response, body) => {
    if (error) {
      error = `There was an error with the URL fech`;
      return callback(error, null);
    }
    const content = JSON.parse(body);
    if (content.length > 0) {
      return callback(null, content[0].description);
    } else {
      error = `Error: please check spelling of the breed`;
      return callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };
