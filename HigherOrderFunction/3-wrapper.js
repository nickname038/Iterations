'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (types[i](args[i]) !== args[i]) {
      throw new TypeError('fdsfd');
    }
  }
  const result = fn(...args);
  if  (types[(types.length - 1)](result) !== result) {
    throw new TypeError('fasfea');
  } else return result;
};

module.exports = { contract };
