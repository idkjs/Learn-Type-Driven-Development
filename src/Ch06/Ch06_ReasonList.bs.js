'use strict';

var Ch06_List = require("./Ch06_List.bs.js");
var Ch04_RecordLiterals = require("../Ch04/Ch04_RecordLiterals.bs.js");

var people_1 = {
  hd: Ch04_RecordLiterals.jim,
  tl: {
    hd: Ch04_RecordLiterals.tom,
    tl: /* [] */0
  }
};

var people = {
  hd: Ch04_RecordLiterals.bob,
  tl: people_1
};

function greetAll(_people) {
  while(true) {
    var people = _people;
    if (!people) {
      return ;
    }
    Ch06_List.greetOne(people.hd);
    _people = people.tl;
    continue ;
  };
}

exports.people = people;
exports.greetAll = greetAll;
/* No side effect */
