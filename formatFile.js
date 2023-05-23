const fs = require('fs');
const prettyjson = require('prettyjson');

const bookData = fs.readFileSync('gyoboStore.json', 'utf8', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Success');
  }
});

const returnJson = JSON.parse(bookData);

let options = {
  keysColor: 'rainbow',
  stringColor: 'yellow',
  numberColor: 'zebra',
  booleanColor: 'random',
  dashColor: 'white',
};

let formattedJson = prettyjson.render(returnJson, options);
console.log(formattedJson);

module.exports = formattedJson;
