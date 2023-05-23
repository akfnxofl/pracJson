const fs = require('fs');

let bookJson = fs.readFileSync('gyoboStore.json', 'utf8', (err) => {
  if (err) {
    console.log(err);
  }
});

bookJson = JSON.parse(bookJson);

console.log(bookJson);

bookJson.comics[0].price = 20000;
bookJson.comics[0].freeGift = '북마커';
bookJson.comics.pop();
bookJson.comics.push({
  "type" : "comics",
  "name" : "abcdefg",
  "author": "sunghyun",
  "price": "50000",
  "bestSeller": true,
  "freeGift" : "책갈피"
})

console.log(bookJson);