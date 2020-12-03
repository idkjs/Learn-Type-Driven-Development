'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");

function triple(x) {
  return [
          x,
          x,
          x
        ];
}

function wrap(x) {
  return {
          NAME: "wrap",
          VAL: x
        };
}

var class_tables = /* Cons */{
  key: undefined,
  data: undefined,
  next: undefined
};

function makeObj(x) {
  if (!class_tables.key) {
    var $$class = CamlinternalOO.create_table(["x"]);
    var env = CamlinternalOO.new_variable($$class, "");
    var x$1 = CamlinternalOO.get_method_label($$class, "x");
    CamlinternalOO.set_method($$class, x$1, (function (self$1) {
            return self$1[env][0];
          }));
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(undefined, $$class);
      self[env] = env$1;
      return self;
    };
    CamlinternalOO.init_class($$class);
    class_tables.key = env_init;
  }
  return Curry._1(class_tables.key, [x]);
}

function greet(x) {
  console.log("Hello, " + x + "!");
  
}

exports.triple = triple;
exports.wrap = wrap;
exports.makeObj = makeObj;
exports.greet = greet;
/* No side effect */
