const fs = require('fs');
const request = require('request');

const baseUrl = 'http://localhost:3000/books/';
//const category = 'novel';
const category = 'comics';

const url = `${baseUrl}${category}`;

const newBook = {
  "type": "novel",
  "name" : "abcdefg",
  "author": "sunghyun",
  "price": "50000",
  "bestSeller": true,
  "freeGift" : "책갈피"
};

request.get(url, (err, res, data) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Response: ', data);
  }
});

// request.post(url, {json: newBook}, (err, res, data) => {
//   if (err) {
//     console.log('Error: ', err);
//   } else {
//     console.log('Response: ', data);
//   }
// });
