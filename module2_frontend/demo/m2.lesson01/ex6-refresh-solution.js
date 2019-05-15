function math(a = 0, b = 0, {type = 'add'} = {}) {
  switch (type) {
    case 'add':
      return a + b;
    case 'sub':
      return a - b;
    default:
      return 0;
  }
}

console.log(math(1, 2, {type: 'add'}) === 3); // 3
console.log(math(1, 2, {type: 'sub'}) === -1); // -1
console.log(math(1, 2, {type: 'foo'}) === 0); // 0
console.log(math(1, 2, {typo: 'sub'}) === 3); // 3
console.log(math(1, 2, {}) === 3); // 3
console.log(math(1, 2) === 3); // 3
console.log(math(1) === 1); // 1
console.log(math() === 0); // 0