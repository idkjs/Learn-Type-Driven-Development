'use strict';


function addV1(int1, int2) {
  return int1 + int2 | 0;
}

function addV2(int1, int2) {
  return int1 + int2 | 0;
}

function addV3(int1, int2) {
  return int1 + int2 | 0;
}

function float_encodeExn($$float) {
  return $$float;
}

function float_decodeExn($$float) {
  return $$float;
}

var $$float = {
  encodeExn: float_encodeExn,
  decodeExn: float_decodeExn
};

function int_encodeExn(prim) {
  return prim;
}

function int_decodeExn(prim) {
  return prim | 0;
}

var $$int = {
  encodeExn: int_encodeExn,
  decodeExn: int_decodeExn
};

var FloatConverter = {
  $$float: $$float,
  $$int: $$int
};

function greet(param) {
  return "Hello, " + param.name + " with ID " + param.id + "!";
}

exports.addV1 = addV1;
exports.addV2 = addV2;
exports.addV3 = addV3;
exports.FloatConverter = FloatConverter;
exports.greet = greet;
/* No side effect */
