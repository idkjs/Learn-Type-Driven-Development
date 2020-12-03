'use strict';


var bob = {
  id: 1,
  name: "Bob"
};

var acmeCo_employees = {
  hd: bob,
  tl: /* [] */0
};

var acmeCo = {
  id: 1,
  name: "Acme Co.",
  employees: acmeCo_employees
};

exports.bob = bob;
exports.acmeCo = acmeCo;
/* No side effect */
