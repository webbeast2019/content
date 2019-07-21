const calculus = require('./calculus');
const fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  const input = data.split('\r\n');
  const output = [];
  input.forEach(str => output.push(calculus.processStr(str)));
  console.log(output);
});