'use strict';


function make($$int) {
  return $$int;
}

function toInt(t) {
  return t;
}

var IntId = {
  make: make,
  toInt: toInt
};

var PersonId = IntId;

var CompanyId = IntId;

var bobId = 1;

var acmeCoId = 1;

exports.IntId = IntId;
exports.PersonId = PersonId;
exports.CompanyId = CompanyId;
exports.bobId = bobId;
exports.acmeCoId = acmeCoId;
/* No side effect */
