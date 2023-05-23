const fs = require('fs');
const XLSX = require('xlsx');



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


// 파일경로를 지정 -> 경로에 있는 파일을 읽어 workbook에 저장
// 첫번째 시트의 데이터를 value에 저장
// 데이터를 읽고, 빈칸의 값을 null로 지정하여 sheetData에 json형식으로 저장
const filePath = 'C:/Users/USER/pracJson/bookdata.xlsx';
const workbook = XLSX.readFile(filePath);
const value = workbook.SheetNames[0];
const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[value], { defval: null });


// sheetData 반복하여 읽으면서 데이터의 type값이 있다면 type값에 따라
// book 객체의 일치하는 type에 데이터 저장
sheetData.forEach((bookData) => {
  const type = bookData.type;
  if (book.hasOwnProperty(type)) {
    book[type].push(bookData);
  }
});

let jsonData = { book };


//console.log(book);
//console.log(jsonData);

// fs 모듈의 writeFile 기능을 활용하여 test.json파일을 생성하고 읽은 데이터값을
// json 형식 string 값으로 변환하여 들여쓰기 2칸 포맷으로 저장
// err가 발생할 경우 Failed를 출력하고, 그 외에는 Success 출력
fs.writeFile('gyoboStore.json', JSON.stringify(jsonData.book, null, 2), 'utf8', (err) => {
  if (err) {
    console.log('Failed');
  } else {
    console.log('Success');
  }
});