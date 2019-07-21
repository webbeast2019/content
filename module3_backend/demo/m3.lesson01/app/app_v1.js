const calculus = require('./calculus');

const input = [
  '1 + 1 =',
  '22 + 31 =',
  '22 / 2 ='
];
const output = [];

input.forEach(str => output.push(calculus.processStr(str)));

console.log(output);