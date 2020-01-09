'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    for (const i of array.keys()) {
      if (array[i] === item) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};

module.exports = { removeElements };
