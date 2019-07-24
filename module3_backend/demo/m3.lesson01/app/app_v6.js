const calculus = require('./calculus');
const fs = require('fs');
const os = require('os');
const http = require('http');

const inputFileName = process.argv[2];
const outputFileName = process.argv[3];

function readAndProcessInput(fileName, callbackFn) {
  fs.readFile(fileName, 'utf8', function (err, data) {
    let output = null;
    if (err) {
      console.error(err.message);
    } else {
      const input = data.split(os.EOL);
      // if last is EOL (result in empty string) - remove it
      if(input[input.length -1] === '') {
        input.pop();
      }
      // go through each line
      output = [];
      input.forEach(str => output.push(calculus.processStr(str)));
    }
    callbackFn(output);
  });
}

let validFlags = inputFileName && outputFileName;
if (!validFlags) {
  console.log('please provide input and output parameters');
}
if (validFlags && inputFileName === outputFileName) {
  console.log('output file cannot be the same as input');
  validFlags = false;
}

if (validFlags) {
  http.createServer((req, res) => {
    readAndProcessInput(inputFileName, (data) => {
      if(!data) {
        res.end('Error');
      } else {
        // treat request
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data.join(' | '));

        // treat output file
        fs.writeFile(outputFileName, data.join(os.EOL), (err) => {
          if (err) {
            console.error(err.message);
          }
        });
      }
    });
  }).listen(8080);
}
