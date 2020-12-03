'use strict';

var Caml_array = require("bs-platform/lib/js/caml_array.js");

var empty = [];

var singleton = [1];

var multi = [
  false,
  true,
  true
];

Caml_array.set(multi, 1, false);

console.log(Caml_array.get(multi, 1));

exports.empty = empty;
exports.singleton = singleton;
exports.multi = multi;
/*  Not a pure module */
