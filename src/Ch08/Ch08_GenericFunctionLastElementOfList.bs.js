'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");

function lastElem(_aList) {
  while(true) {
    var aList = _aList;
    if (!aList) {
      return ;
    }
    var l = aList.tl;
    if (!l) {
      return Caml_option.some(aList.hd);
    }
    _aList = l;
    continue ;
  };
}

console.log(lastElem({
          hd: 1,
          tl: {
            hd: 3,
            tl: {
              hd: 2,
              tl: {
                hd: 5,
                tl: {
                  hd: 4,
                  tl: /* [] */0
                }
              }
            }
          }
        }));

console.log(lastElem({
          hd: "a",
          tl: {
            hd: "b",
            tl: {
              hd: "c",
              tl: {
                hd: "d",
                tl: /* [] */0
              }
            }
          }
        }));

exports.lastElem = lastElem;
/*  Not a pure module */
