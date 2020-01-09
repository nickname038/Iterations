'use strict';

const sum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i += 1) {
    sum += args[i];
  }
  return sum;
};

module.exports = { sum };
