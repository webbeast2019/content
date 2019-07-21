const calculus = require('./calculus');
const fs = require('fs');
const os = require('os');

fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  const input = data.split(os.EOL);
  // if last is EOL (result in empty string) - remove it
  if(input[input.length -1] === '') {
    input.pop();
  }
  // go through each line
  const output = [];
  input.forEach(str => output.push(calculus.processStr(str)));

  fs.writeFile('output.txt', output.join(os.EOL), (err) => {
    if (err) {
      console.error(err.message);
    }
  });
  console.log(output);
});
