'use strict';

var List = require("bs-platform/lib/js/list.js");

function pair(x) {
  return [
          x,
          x
        ];
}

function pairAll(list) {
  return List.map(pair, list);
}

exports.pair = pair;
exports.pairAll = pairAll;
/* No side effect */
