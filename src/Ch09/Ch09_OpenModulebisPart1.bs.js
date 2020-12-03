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

exports.ColorExample = ColorExample;
/* No side effect */
