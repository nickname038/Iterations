'use strict';

const random = (min, max) => {
  const rand = Math.floor(Math.random() * (max - min) + min);
  return rand;
};

module.exports = { random };
