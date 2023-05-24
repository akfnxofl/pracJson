// fs 모듈을 활용하여 json을 파일을 읽어
// update, delete 작업을 수행한다.

const fs = require('fs');

// fs 모듈을 활용하여 json파일을 읽어온다.
let bookJson = fs.readFileSync('gyoboStore.json', 'utf8', (err) => {
  if (err) {
    console.log(err);
  }
});

// 읽어온 데이터를 json형식으로 파싱하여 bookJson에 할당한다.
bookJson = JSON.parse(bookJson);

console.log(bookJson);

// bookJson.comics의 첫번째 책의 가격을 20000으로 변경한다.
// bookJson.comics의 첫번째 책의 사은품을 북마커로 변경한다.
// bookJson.comics의 마지막 책의 정보를 삭제한다.
// bookJson.comics의 새로운 책의 정보를 추가한다.
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