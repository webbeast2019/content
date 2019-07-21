const calculus = require('./calculus');
const fs = require('fs');
const os = require('os');

fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  const input = data.split(os.EOL);
  const output = [];
  input.forEach(str => output.push(calculus.processStr(str)));

  fs.writeFile('output.txt', output.join(os.EOL));
  console.log(output);
});