'use strict';


var bob = {
  id: 1,
  name: "Bob"
};

function greet(person) {
  return "Hello, " + (person.name + (" with ID " + String(person.id)));
}

var jim = {
  id: 2,
  name: "Jim",
  age: 29
};

console.log(greet(jim));

exports.bob = bob;
exports.greet = greet;
exports.jim = jim;
/*  Not a pure module */
