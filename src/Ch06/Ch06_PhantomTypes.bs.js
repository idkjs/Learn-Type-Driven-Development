'use strict';

var $$String = require("bs-platform/lib/js/string.js");

function select(columns) {
  var commalist = $$String.concat(", ", columns);
  return "select " + commalist;
}

function from(table, t) {
  return "" + t + " from " + table;
}

function print(t) {
  return t;
}

var Sql = {
  select: select,
  from: from,
  print: print
};

var sql = from("employees", select({
          hd: "name",
          tl: /* [] */0
        }));

console.log(sql);

exports.Sql = Sql;
exports.sql = sql;
/* sql Not a pure module */
