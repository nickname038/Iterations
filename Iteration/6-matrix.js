'use strict';

const max = matrix => {
  let max = matrix[0][0];
  for (const arr of matrix) {
    for (const val of arr) {
      if (val > max) {
        max = val;
      }
    }
  }
  return max;
};

module.exports = { max };
