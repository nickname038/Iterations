'use strict';

const square = b => b * b;

const cube =  x => x ** 3;

const average =  (a, b) => (a + b) / 2;

const calculate = () => {
  const m = [];
  for (let i = 0; i <= 9; i += 1) {
    const b = square(i);
    const a = cube(i);
    const c = average(a, b);
    m.push(c);
  }
  return m;
};

module.exports = { square, cube, average, calculate };
