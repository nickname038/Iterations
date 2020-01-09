'use strict';

const iterate = (obj, callback) => {
  for (const i in obj) {
    callback(i, obj[i], obj);
  }
};

module.exports = { iterate };
