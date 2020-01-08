'use strict';

const countTypesInArray = n => {
  const h = {};
  for (const a of n) {
    if (h[typeof a]) {
      h[typeof a]++;
    } else {
      h[typeof a]++;
      h[typeof a] = 0;
      ++h[typeof a];
    }
  }
  return h;
};

module.exports = { countTypesInArray };
