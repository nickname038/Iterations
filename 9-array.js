'use strict';

const phonebook = [
  { name: 'Marcus', phone: '32' }
];


const findPhoneByName = n => {
  for (let i = 0; i < phonebook.length; i++) {
    if (phonebook[i].name === n) {
      return (phonebook[i].phone);
    }
  }
};

module.exports = { phonebook, findPhoneByName };
