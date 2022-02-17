const request = require('request');
const arg = process.argv.slice(2);
const API = `https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`;

request(API, (error, response, body) => {
  if (error) { //Error with API link catch
    return console.log(`There was an error with the URL fech`);
  }
  const content = JSON.parse(body);
  if (content.length > 0) { //Ensures that body holds data
    return console.log(content[0]['description']);
  } else {
    return console.log(`Error: please check spelling of the breed`);
  }
});
