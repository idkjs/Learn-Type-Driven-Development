'use strict';


console.log("Green");

console.log("Green");

function stringOfColor(c) {
  if (c === "Red") {
    return "red";
  } else if (c === "Yellow") {
    return "yellow";
  } else if (c === "Blue") {
    return "blue";
  } else if (c === "Green") {
    return "green";
  } else {
    return "orange";
  }
}

function stringOfRgb(c) {
  if (c === "Blue") {
    return "RGB blue";
  } else if (c === "Green") {
    return "RGB green";
  } else {
    return "RGB red";
  }
}

console.log(stringOfColor("Green"));

console.log(stringOfRgb("Green"));

var onegreen = "Green";

var othergreen = "Green";

exports.onegreen = onegreen;
exports.othergreen = othergreen;
exports.stringOfColor = stringOfColor;
exports.stringOfRgb = stringOfRgb;
/*  Not a pure module */
