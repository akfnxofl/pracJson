const fs = require('fs');
const express = require('express');

const app = express();

let bookJson = fs.readFileSync('gyoboStore.json', 'utf8', (err) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Readfile Success');
  }
});

bookJson = JSON.parse(bookJson);

app.listen(3000, () => {
  console.log("Server is running...");
});

app.get('/', (req, res) => {
  res.send('Gyobo Store Book Data');  
});

app.get('/books', (req, res) => {
  res.json(bookJson);
});

app.get('/books/:category', (req, res) => {
  category = req.params.category;
  let book = bookJson[category];
  res.json(book);
});

// 웹 브라우저로 사용 가능
// curl을 사용하여 http://localhost:3000/books/novel 등
// url에 접속하여 해당 정보를 출력할 수 있다.

// $response = Invoke-RestMethod -Uri http://localhost:3000/books/novel
// $response 와 같은 방법으로도 출력할 수 있다.
// curl과 차이점은 Content부분만 출력하며, json형식으로 출력할 수 있어 가독성이 좋다.
