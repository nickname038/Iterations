'use strict';

const generateKey = (length, possible) => {
  let str = '';
  for (let i = 0; i < length; i += 1) {
    const num = Math.floor(Math.random() * possible.length);
    const char = possible[num];
    str += char;
  }
  return str;
};

module.exports = { generateKey };
