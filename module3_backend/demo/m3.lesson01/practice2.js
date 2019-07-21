var moshe = 'Rabenu';
// try const instead of var
// const moshe = 'Rabenu';

if(typeof window === 'object') {
  console.log(`Browser window.moshe: ${window.moshe}`);
} else {
  console.log(`Node global.moshe: ${global.moshe}`);
}

function foo () {
  return 43;
}

if(typeof window === 'object') {
  console.log(`Browser window.foo: ${window.foo}`);
} else {
  console.log(`Node global.foo: ${global.foo}`);
  module.exports.foo = foo;
  console.log(`Node module.exports: ${module.exports}`);
}
