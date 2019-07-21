function processStr(str) {
  let res = 0;
  const fragmentedStr = str.split(' ');
  const operator = fragmentedStr[1];
  const num1 = parseInt(fragmentedStr[0], 10);
  const num2 = parseInt(fragmentedStr[2], 10);

  switch (operator) {
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '/':
      res = num1 / num2;
      break;
    case '*':
      res = num1 * num2;
      break;
  }
  return `${str} ${res}`
}

module.exports.processStr = processStr;
