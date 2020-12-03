'use strict';


function classifyId(id) {
  if (id >= 6) {
    if (id >= 11) {
      return "High";
    } else {
      return "Medium";
    }
  } else if (id > 0) {
    return "Low";
  } else {
    return "High";
  }
}

function greet1(person) {
  var match = person.id;
  var match$1 = person.name;
  if (match$1 === "Dave") {
    return "I'm sorry, Dave, I can't let you do that.";
  } else if (match !== 1) {
    return "Hi, " + (match$1 + (" with ID " + (String(match) + "!")));
  } else {
    return "Hello, boss.";
  }
}

function greet2(person) {
  var id = person.id;
  if (person.name === "Dave") {
    return "I'm sorry, Dave, I can't let you do that.";
  } else if (id !== 1) {
    return "Hi, " + (person.name + (" with ID " + (String(id) + "!")));
  } else {
    return "Hello, boss.";
  }
}

exports.classifyId = classifyId;
exports.greet1 = greet1;
exports.greet2 = greet2;
/* No side effect */
