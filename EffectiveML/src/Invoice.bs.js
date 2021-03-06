// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function make(name, email, date, total) {
  return [
          name,
          email,
          date,
          total,
          false
        ];
}

function discount(invoice, discount$1) {
  if (invoice[4]) {
    return invoice;
  }
  var tmp;
  switch (discount$1) {
    case /* Ten */0 :
        tmp = 0.9;
        break;
    case /* Fifteen */1 :
        tmp = 0.85;
        break;
    case /* Twenty */2 :
        tmp = 0.8;
        break;
    
  }
  return [
          invoice[0],
          invoice[1],
          invoice[2],
          invoice[3] * tmp,
          true
        ];
}

exports.make = make;
exports.discount = discount;
/* No side effect */
