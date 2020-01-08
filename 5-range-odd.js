'use strict';

function rangeOdd(a, b) {
  const m = [];
  if (a % 2 === 1 || a % 2 === -1) {
    for (let i = a; i <= b; i += 2) {
      m.push(i);
    }
  } else if (a % 2 !== 1 || a % 2 !== -1) {
    for (let i = a + 1; i <= b; i += 2) {
      m.push(i);
    }
  }
  return m;
}

module.exports = { rangeOdd };

