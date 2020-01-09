'use strict';

const compose = (...fns) => {

  const events = {};
  const f = x => {
    try {
      return fns.reduceRight((v, f) => f(v), x);
    } catch (error) {
      f.emit('error', error);
      return;
    }
  };

  f.on = function (name, fn) {
    const event = events[name];
    if (event) {
      event.push(fn);
    } else {
      events[name] = [fn];
    }
  };

  f.emit = function (name, ...data) {
    const event = events[name];
    if (event) event.forEach(fn => fn(...data));
  };

  return f;
};

module.exports = { compose };
