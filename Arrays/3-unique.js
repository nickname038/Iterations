'use strict';

const unique = array => {
  const unicArray = [];
  for (const i of array) {
    if (!(unicArray.includes(i))) {
      unicArray.push(i);
    }
  }
  return unicArray;
};

module.exports = { unique };
