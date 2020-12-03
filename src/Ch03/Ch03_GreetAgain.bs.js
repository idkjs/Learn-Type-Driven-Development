'use strict';


function greetAgain(person) {
  return "Hello again, " + (person.name + (" with ID " + (String(person.id) + "!")));
}

exports.greetAgain = greetAgain;
/* No side effect */
