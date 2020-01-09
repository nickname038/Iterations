'use strict';

const removeElement = (array, item) => {
  for (const i of array.length - 1) {
    if (array[i] === item) {
      array.splice(i, 1);
    }
  }
  return array;
};

module.exports = { removeElement };
