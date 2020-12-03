'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function printEnveloppeLabel(firstname, lastname, address, country) {
  Pervasives.print_newline(undefined);
  console.log(firstname + (" " + lastname));
  console.log(address);
  console.log(country);
  
}

printEnveloppeLabel("John", "Doe", "Some address in the US", "USA");

function printEnveloppeLabelUS(param) {
  return function (param$1) {
    return function (param$2) {
      var param$3 = "USA";
      return printEnveloppeLabel(param, param$1, param$2, param$3);
    };
  };
}

Curry._1(printEnveloppeLabelUS("John")("Doe"), "Some address in the US");

function printEnveloppeLabelDoeFamily(param) {
  return Curry._1(printEnveloppeLabelUS(param)("Doe"), "Some address in the US");
}

Curry._1(printEnveloppeLabelUS("Jane")("Doe"), "Some address in the US");

exports.printEnveloppeLabel = printEnveloppeLabel;
exports.printEnveloppeLabelUS = printEnveloppeLabelUS;
exports.printEnveloppeLabelDoeFamily = printEnveloppeLabelDoeFamily;
/*  Not a pure module */
