const arg = process.argv.slice(2);
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(arg[0], (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});
