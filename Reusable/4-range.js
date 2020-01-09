'use strict';

const range = (x, y) => {
  const m = [];
  for (let a = x; a <= y; a++) {
    m.push(a);
  }
  return m;
};

module.exports = { range };
