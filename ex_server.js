const fs = require('fs');
const request = require('request');
const express = require('express');
const app = express();


let bookJson = fs.readFileSync('gyoboStore.json', 'utf8', (err) => {
  if(err) {
    console.log('error : ' + err);
  }
});

bookJson = JSON.parse(bookJson);

app.listen(3000, () => {
  console.log('Server is running');
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/book/:category', (req, res) => {
  const category = req.params.category;
  const books = bookJson[category];
  res.json(books);
});

app.get('/book', (req, res) => {
  res.json(bookJson);
});

request.get('http://localhost:3000/book/comics', (err, res, body) => {
  if(err) {
    console.log('Error: ', err);
  } else {
    console.log('Response: ', res.statusCode);
    console.log('Body: ', body);
  }
});

app.post('/book/novel', (req, res) => {
  res.json(bookJson.novel);
})

const requestData = { key: 'value' };
request.post('http://localhost:3000/book/novel', { json: requestData }, (err, res, body) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Response:', res.statusCode);
    console.log('Body:', body);
  }
});