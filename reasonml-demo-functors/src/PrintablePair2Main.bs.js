// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var PrintablePair2$ReasonmlDemoFunctors = require("./PrintablePair2.bs.js");

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

var partial_arg = PrintablePair2$ReasonmlDemoFunctors.Make;

var PrintableSI = partial_arg(PrintableString, PrintableInt);

Pervasives.print_string(Curry._1(PrintableSI.print, Curry._2(PrintableSI.make, "Jane", 53)));

exports.PrintableString = PrintableString;
exports.PrintableInt = PrintableInt;
exports.PrintableSI = PrintableSI;
/* PrintableSI Not a pure module */