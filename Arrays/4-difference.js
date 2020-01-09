'use strict';


const difference = (array1, array2) => {
  if (array1[0]) {
    const difArray = [];
    for (const i of array1) {
      if (!(array2.includes(i))) {
        difArray.push(i);
      }
    }
    return difArray;
  } else {
    return [];
  }
};
module.exports = { difference };
