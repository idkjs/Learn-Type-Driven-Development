'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function tryFind(needle, haystack) {
  var currHaystack = haystack;
  var stop = false;
  var currItem;
  while(!stop) {
    var match = currHaystack;
    if (match) {
      var item = match.hd;
      if (Curry._1(needle, item)) {
        stop = true;
        currItem = Caml_option.some(item);
      } else {
        currHaystack = match.tl;
      }
    } else {
      stop = true;
    }
  };
  return currItem;
}

exports.tryFind = tryFind;
/* No side effect */
