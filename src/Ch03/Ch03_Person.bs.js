'use strict';

var $$String = require("bs-platform/lib/js/string.js");

function make(string) {
  return $$String.capitalize_ascii($$String.trim(string));
}

function toString(t) {
  return t;
}

var Name = {
  make: make,
  toString: toString
};

function make$1(id, name) {
  return {
          id: id,
          name: name
        };
}

function id(t) {
  return t.id;
}

function name(t) {
  return t.name;
}

exports.Name = Name;
exports.make = make$1;
exports.id = id;
exports.name = name;
/* No side effect */
