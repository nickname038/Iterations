'use strict';

const phonebook = {};
const key = 'Marcus';
phonebook[key] = '+380445554433';

const findPhoneByName = n => phonebook[n];

module.exports = { phonebook, findPhoneByName };
