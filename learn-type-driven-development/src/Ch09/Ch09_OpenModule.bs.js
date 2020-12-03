'use strict';


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

var ColorExample = {
  onegreen: "Green",
  othergreen: "Green",
  stringOfColor: stringOfColor,
  stringOfRgb: stringOfRgb
};

console.log("1/ Use function and values inside the module...");

console.log(stringOfColor("Green"));

console.log(stringOfRgb("Green"));

console.log("2/ Use function and values from the module after opening it...");

console.log("String value of another color: " + stringOfColor("Blue"));

var colorString;

exports.ColorExample = ColorExample;
exports.colorString = colorString;
/*  Not a pure module */
