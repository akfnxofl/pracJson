// fs 모듈을 사용해서 json파일을 읽어
// prettyjson 모듈을 사용해 포맷을 변경한다.

const fs = require('fs');
const prettyjson = require('prettyjson');

// fs 모듈의 readFileSync기능을 사용하여 makeFile.js에서 생성한
// gyoboStore.json을 동기적으로 읽어온다.
// 비동기적으로 읽었을때 파일을 읽는것보다 밑의 코드가 먼저 실행되어
// 오류가 발생한다.
const bookData = fs.readFileSync('gyoboStore.json', 'utf8', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Success');
  }
});

// bookData로 읽어온 데이터를 json형식으로 파싱하여
// returnJson에 저장한다.
const returnJson = JSON.parse(bookData);

// prettyjson 모듈의 옵션 기능을 활용하여
// 변경할 포멧의 색상을 저장한다.
let options = {
  keysColor: 'rainbow',
  stringColor: 'yellow',
  numberColor: 'zebra',
  booleanColor: 'random',
  dashColor: 'white',
};

// prettyjson 모듈을 활용하여 returnJson 데이터를 options 색상으로
// 렌더링된 값을 formattedJson에 저장하여 출력한다.
let formattedJson = prettyjson.render(returnJson, options);
console.log(formattedJson);
