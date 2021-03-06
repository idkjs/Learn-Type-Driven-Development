// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var PrintablePair1$ReasonmlDemoFunctors = require("./PrintablePair1.bs.js");

function print(s) {
  return s;
}

var PrintableString = {
  print: print
};

function print$1(i) {
  return String(i);
}

var PrintableInt = {
  print: print$1
};

var partial_arg = PrintablePair1$ReasonmlDemoFunctors.Make;

var PrintableSI = partial_arg(PrintableString, PrintableInt);

var pair = Curry._2(PrintableSI.make, "Jane", 53);

var str = Curry._1(PrintableSI.print, pair);

Pervasives.print_string(str);

exports.PrintableString = PrintableString;
exports.PrintableInt = PrintableInt;
exports.PrintableSI = PrintableSI;
/* PrintableSI Not a pure module */
