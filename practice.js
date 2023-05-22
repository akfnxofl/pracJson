const fs = require('fs');


function writeFile(filePath, jsonData) {
  fs.writeFile(filePath, jsonData, 'utf8', (err) => {
    if (err) {
      console.log('Failed');
    } else {
      console.log('Success');
    }
  });
}

function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  });
}

