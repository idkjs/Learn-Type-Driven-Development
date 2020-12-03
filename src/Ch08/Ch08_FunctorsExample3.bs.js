'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function Make(First, Second) {
  var make = function (f, s) {
    return [
            f,
            s
          ];
  };
  var print = function (param) {
    return "(" + (Curry._1(First.print, param[0]) + (", " + (Curry._1(Second.print, param[1]) + ")")));
  };
  return {
          make: make,
          print: print
        };
}

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

function make(f, s) {
  return [
          f,
          s
        ];
}

function print$2(param) {
  return "(" + (print(param[0]) + (", " + (print$1(param[1]) + ")")));
}

var PrintableSI = {
  make: make,
  print: print$2
};

var pair = Curry._2(make, "Jane", 53);

var str = Curry._1(print$2, pair);

Pervasives.print_string(str);

exports.Make = Make;
exports.PrintableString = PrintableString;
exports.PrintableInt = PrintableInt;
exports.PrintableSI = PrintableSI;
/* pair Not a pure module */
