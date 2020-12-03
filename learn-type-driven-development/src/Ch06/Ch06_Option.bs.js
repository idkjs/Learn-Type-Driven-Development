'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Ch06_List = require("./Ch06_List.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Ch06_ReasonList = require("./Ch06_ReasonList.bs.js");

function tryFind(needle, _haystack) {
  while(true) {
    var haystack = _haystack;
    if (!haystack) {
      return ;
    }
    var item = haystack.hd;
    if (Curry._1(needle, item)) {
      return Caml_option.some(item);
    }
    _haystack = haystack.tl;
    continue ;
  };
}

function optionallyGreet(person) {
  if (person !== undefined) {
    return Ch06_List.greetOne(person);
  } else {
    console.log("No such person!");
    return ;
  }
}

function idEq1(param) {
  return param.id === 1;
}

function idEq4(param) {
  return param.id === 4;
}

optionallyGreet(tryFind(idEq1, Ch06_ReasonList.people));

optionallyGreet(tryFind(idEq4, Ch06_ReasonList.people));

exports.tryFind = tryFind;
exports.optionallyGreet = optionallyGreet;
exports.idEq1 = idEq1;
exports.idEq4 = idEq4;
/*  Not a pure module */
