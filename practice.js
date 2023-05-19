const fs = require('fs');
const XLSX = require('xlsx');

let novel = [];
novel = XLSX.readFile(data.xlse)


let data = {
  book: {
    novel: [ // (data 파일을 읽어와서) (장르 별로) (book에 객체 내) (배열로 저장) 후  // writeFile로 json파일 생성
    ]
  }
};

fs.writeFile("test.json", JSON.stringify(data, null, 2), (err) =>{
    if (err) {
      console.log(err);
    }
    else {
      console.log('Success');
    }
  }
)