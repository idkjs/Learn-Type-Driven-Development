'use strict';


function make(id, name) {
  return {
          id: id,
          name: name
        };
}

var Person = {
  make: make
};

var Company = {};

exports.Person = Person;
exports.Company = Company;
/* No side effect */
