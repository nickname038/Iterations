'use strict';

const sum = (...args) => {
  args.unshift(0);
  let sum = 0;
  let i = 0;
  do {
    sum += args[i];
    i += 1;
  } while (i < args.length);
  return sum;
};

module.exports = { sum };
