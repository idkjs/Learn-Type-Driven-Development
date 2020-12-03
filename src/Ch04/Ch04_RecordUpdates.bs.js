'use strict';

var Ch04_RecordLiterals = require("./Ch04_RecordLiterals.bs.js");

var bobLongForm1_id = Ch04_RecordLiterals.bob.id;

var bobLongForm1 = {
  id: bobLongForm1_id,
  name: "Robert"
};

var bobLongForm2_id = Ch04_RecordLiterals.bob.id;

var bobLongForm2 = {
  id: bobLongForm2_id,
  name: "Robert"
};

var bob = Ch04_RecordLiterals.bob;

exports.bob = bob;
exports.bobLongForm1 = bobLongForm1;
exports.bobLongForm2 = bobLongForm2;
/* No side effect */
