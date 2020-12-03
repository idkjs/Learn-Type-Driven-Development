'use strict';

var $$Set = require("bs-platform/lib/js/set.js");
var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

var compare = Caml_obj.caml_compare;

var IntSet = $$Set.Make({
      compare: compare
    });

var myIntSet = Curry._1(IntSet.of_list, {
      hd: 1,
      tl: {
        hd: 2,
        tl: {
          hd: 3,
          tl: /* [] */0
        }
      }
    });

console.log(myIntSet);

function MakeSet(Item) {
  var add = function (currentSet, newItem) {
    if (List.exists((function (x) {
              return Curry._2(Item.equal, x, newItem);
            }), currentSet)) {
      return currentSet;
    } else {
      return {
              hd: newItem,
              tl: currentSet
            };
    }
  };
  return {
          empty: /* [] */0,
          add: add
        };
}

function equal(param, param$1) {
  if (Caml_obj.caml_equal(param[0], param$1[0])) {
    return Caml_obj.caml_equal(param[1], param$1[1]);
  } else {
    return false;
  }
}

function create(x, y) {
  return [
          x,
          y
        ];
}

var IntPair = {
  equal: equal,
  create: create
};

function add(currentSet, newItem) {
  if (List.exists((function (x) {
            return equal(x, newItem);
          }), currentSet)) {
    return currentSet;
  } else {
    return {
            hd: newItem,
            tl: currentSet
          };
  }
}

var SetOfIntPairs = {
  empty: /* [] */0,
  add: add
};

console.log(/* [] */0);

var otherSetOfPairItems = add(/* [] */0, [
      1,
      2
    ]);

console.log(otherSetOfPairItems);

var thirdSetOfPairItems = add(otherSetOfPairItems, [
      2,
      3
    ]);

console.log(thirdSetOfPairItems);

var aSetOfPairItems = /* [] */0;

exports.IntSet = IntSet;
exports.myIntSet = myIntSet;
exports.MakeSet = MakeSet;
exports.IntPair = IntPair;
exports.SetOfIntPairs = SetOfIntPairs;
exports.aSetOfPairItems = aSetOfPairItems;
exports.otherSetOfPairItems = otherSetOfPairItems;
exports.thirdSetOfPairItems = thirdSetOfPairItems;
/* IntSet Not a pure module */
