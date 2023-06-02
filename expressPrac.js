const express = require('express');
const fs = require('fs');
const app = express();

let bookJson = fs.readFileSync('gyoboStore.json', 'utf8', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('ReadFile Success');
  }
});

bookJson = JSON.parse(bookJson);

// express 객체 app의 get 메소드를 사용하여
// 기본 주소 접속 시 Basic Screen이라는 값을 출력하고,
// terminal에서는 Basic Screen access를 출력
app.get('/', (req, res) => {
  res.send('Basic Screen');
  console.log('Basic Screen access');
});

// books 주소로 접속 시 bookJson을 출력한다.
app.get('/books', (req, res) => {
  res.json(bookJson);
  console.log(bookJson);
});

// category를 동적 파라미터로 받아 bookJson[book] 값을 출력
// category가 bookJson에 존재하면 출력
// 존재하지 않으면 error메세지 출력 및 상태코드전송
app.get('/books/:category', (req, res) => {
  let book = req.params.category;
  if (bookJson.hasOwnProperty(book)) {
    res.json(bookJson[book]);
    console.log(bookJson[book]);
  } else {
    res.status(404).json({"Error": "Category not found"});
    console.log({"Error": "Category not found"})
  }
});

// item 배열에 gyoboStor.json에 책의 정보를 구성하는 객체의 key 값을 저장
// category와 info를 동적 파라미터로 받아서 모두 gyoboStore에 존재할 경우
// 해당 값을 map 메소드를 사용하여 새로운 배열로 할당하여 출력
// 해당 파라미터가 존재하지 않을 경우 상태코드와 메세지 출력
const item = ['type', 'name', 'author', 'price', 'bestSeller', 'freeGift'];
app.get('/books/:category/:info', (req, res) => {
  let book = req.params.category;
  let info = req.params.info;
  if (item.includes(info)) {
    let result = bookJson[book].map((item) => item[info]);
    console.log(result);
    res.json(result);
  } else {
    res.status(404).json({"Error": "Info not found"});
    console.log({"Error": "Info not found"});
  }
});

// Invoke-WebRequest -Method POST http://localhost:3000/books/novel/price/update
// app객체의 post 메소드를 사용하여 
// novel의 price값이 16800일 경우 20000으로 업데이트 후 출력
app.post('/books/novel/price/update', (req, res) => {
  let bookData = bookJson['novel'];
  bookData.forEach((item) => {
    if (item.price == 16800) {
      item.price = 20000;
    }
  });
  res.json(bookData);
  console.log(bookData);
});

// Invoke-WebRequest -Method DELETE http://localhost:3000/books/novel
// delete 메소드를 사용해서 category가 bookJson에 존재할 경우
// 그 데이터를 삭제한다. 만약 bookJson에 category가 없다면
// 오류메세지와 상태코드를 출력한다.
app.delete('/books/:category', (req, res) => {
  const book = req.params.category;
  if (bookJson.hasOwnProperty(book)) {
    delete bookJson[book];
    res.status(200).json({"Success": `${book} Delete Success`});
    console.log({"Success": `${book} Delete Success`});
  } else {
    res.status(404).json({"Error": "Category not found"});
    console.log({"Error": "Category not found"});
  }
});

// listen 메소드를 사용하여 3000포트를 사용하고, 서버가 실행될 때
// Server is running on port 3000 메세지를 출력
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});