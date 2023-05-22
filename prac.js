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

const filePath = 'C:/Users/USER/pracJson/data.xlsx';
const workbook = XLSX.readFile(filePath);
const value = workbook.SheetNames[0];
const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[value]);



sheetData.forEach((bookData) => {
  const type = bookData.type;
  if(book.hasOwnProperty(type)) {
    book[type].push(bookData);
  }
});

let jsonData = {book};


console.log(book);
console.log(jsonData);