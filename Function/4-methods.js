'use strict';

const methods = iface => {
  const arr = [];
  for (const name in iface) {
    const f = iface[name];
    if (typeof f === 'function') {
      arr.push([name, f.length]);
    }
  }
  return arr;
};

module.exports = { methods };
