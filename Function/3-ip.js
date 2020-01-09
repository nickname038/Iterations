'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const arr = ip.split('.');
  const l = (acc, val) => ((acc << 8) + (+val));
  return arr.reduce(l);
};

module.exports = { ipToInt };
