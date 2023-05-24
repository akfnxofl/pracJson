// fs, xlsx 모듈을 사용하여 excel파일을 읽어 새로운 json 파일을 생성

const fs = require('fs');
const XLSX = require('xlsx');


// book이라는 변수에 excel에서 읽어온 데이터가 들어갈 집을 생성
let book = {
  "novel": [],
  "poem": [],
  "cook": [],
  "health": [],
  "religion": [],
  "science": [],
  "travel": [],
  "magazine": [],
  "IT": [],
  "comics": [],
};


// 파일경로를 저장할 변수를 선언과 동시에 경로 할당
// filepath 경로에 있는 파일을 읽어 workbook에 할당
// excel 파일의 첫번째 시트를 읽기 위해 SheetNames[0]로 지정
// excel에서 첫번째 시트 데이터를 읽어 올때, json형식으로 변환과 동시에 
// excel 내에서 빈칸은 null값을 기본값으로 지정하고 데이터를 sheetData에 저장
const filePath = 'C:/Users/USER/pracJson/bookdata.xlsx';
const workbook = XLSX.readFile(filePath);
const value = workbook.SheetNames[0];
const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[value], { defval: null });


// forEach()를 통해 bookData의 요소에 대해 반복을 실행한다.
// type변수에 bookData의 type의 데이터를 지정한다.
// 위에서 선언한 book 변수에 type의 key가 존재하면
// bookData.type과 book[type]과 일치하는 데이터를 넣어준다.
sheetData.forEach((bookData) => {
  const type = bookData.type;
  if (book.hasOwnProperty(type)) {
    book[type].push(bookData);
  }
});

// jsonData를 jsonData = {book : book} 형식으로 저장
let jsonData = { book };

// fs 모듈의 writeFile 기능을 활용하여 gyoboStore.json파일을 같은 directory에 생성하고,
// jsonData.book의 데이터를 string으로 변환하고, 모든 속성을 변환에 포함시키고,
// 2칸 들여쓰기 포멧으로 gyoboStore.json을 생성한다.
// 생성 과정에서 err 발생하면 Faile : err메세지를 출력하고
// 그 외에는 Success를 출력한다.
fs.writeFile('gyoboStore.json', JSON.stringify(jsonData.book, null, 2), 'utf8', (err) => {
  if (err) {
    console.log(`Failed : ${err}`);
  } else {
    console.log('Success');
  }
});