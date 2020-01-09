'use strict';

const pipe = (...fns) => {
  for (const i of fns) {
    if (typeof i !== 'function') {
      throw new Error('No functoin');
    } else return (x => fns.reduce((v, f) => f(v), x));
  }
};
module.exports = { pipe };
