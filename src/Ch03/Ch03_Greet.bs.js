'use strict';


function greet(person) {
  return "Hello, " + (person.name + (" with ID " + (String(person.id) + "!")));
}

exports.greet = greet;
/* No side effect */
