'use strict';

var Ch04_RecordLiterals = require("../Ch04/Ch04_RecordLiterals.bs.js");

var people_1 = /* Cons */{
  _0: Ch04_RecordLiterals.jim,
  _1: /* Cons */{
    _0: Ch04_RecordLiterals.tom,
    _1: /* Empty */0
  }
};

var people = /* Cons */{
  _0: Ch04_RecordLiterals.bob,
  _1: people_1
};

function greetOne(param) {
  console.log("Hello, " + param.name + " with ID " + param.id + "!");
  
}

function greetAll(_people) {
  while(true) {
    var people = _people;
    if (!people) {
      return ;
    }
    greetOne(people._0);
    _people = people._1;
    continue ;
  };
}

exports.people = people;
exports.greetOne = greetOne;
exports.greetAll = greetAll;
/* No side effect */
