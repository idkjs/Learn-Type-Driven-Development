'use strict';


function stringToColour(string) {
  switch (string) {
    case "blue" :
        return "blue";
    case "green" :
        return "green";
    case "red" :
        return "red";
    default:
      return "unknown";
  }
}

exports.stringToColour = stringToColour;
/* No side effect */
