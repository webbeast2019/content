function math(a, b, type) {
  return 0
}

console.log(math(1, 2, {type: 'add'}) === 3);
console.log(math(1, 2, {type: 'sub'}) === -1);
console.log(math(1, 2, {type: 'foo'}) === 0);
console.log(math(1, 2, {typo: 'sub'}) === 3);
console.log(math(1, 2, {}) === 3);
console.log(math(1, 2) === 3);
console.log(math(1) === 1);
console.log(math() === 0);