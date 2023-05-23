const prettyjson = require('prettyjson');

let jsonData = {
  name: 'John',
  age: 30,
  city: 'New York'
};

let options = {
  keysColor: 'cyan',
  dashColor: 'magenta',
  stringColor: 'white'
};

let formattedJson = prettyjson.render(jsonData, options);
console.log(formattedJson);
