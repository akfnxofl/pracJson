const fs = require('fs');
const XLSX = require('xlsx');

let bookType = book = [];
let gyoboStore = {};
gyoboStore.book = gyoboStore.hottracks = []; 

const data = XLSX.readFile('data.xlsx');
const booksheet = data.Sheets[data.SheetNames[0]];
const bookJson = XLSX.utils.sheet_to_json(booksheet, {header: 1});

for(let i = 1; i < bookJson.length; i++) {
  bookType.push(bookJson[i][0]);
}
bookType = [...new Set(book)];

for(let i = 1; i < bookJson.length; i++) {
  if(book[i-1] == bookJson[i][0]) {
    for(let j = 1; j < bookJson.length; j++) {
      book[i-1][j-1].push(bookJson[i][j]);
    }
  }
}

console.log(bookJson);


/* fs.writeFile("test.json", JSON.stringify(data), 'utf8', (err) =>{
  if (err){
    console.log(err);
  } else {
    console.log('Success');
  }
}); */