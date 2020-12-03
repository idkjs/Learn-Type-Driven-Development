'use strict';


console.log("Moccasins");

console.log("Slingbacks");

function infoAboutShoe(s) {
  if (s === "HighHeels") {
    return "High Heels - Specific woman shoe";
  } else if (s === "Sneakers") {
    return "Sneakers";
  } else if (s === "Slingbacks") {
    return "Slingbacks - Specific woman shoe";
  } else if (s === "Moccasins") {
    return "Moccasins";
  } else if (s === "Wingtips") {
    return "Wingtips";
  } else {
    return "Boots";
  }
}

console.log(infoAboutShoe("Moccasins"));

console.log(infoAboutShoe("Slingbacks"));

var johndoe_shoe = "Moccasins";

var janedoe_shoe = "Slingbacks";

exports.johndoe_shoe = johndoe_shoe;
exports.janedoe_shoe = janedoe_shoe;
exports.infoAboutShoe = infoAboutShoe;
/*  Not a pure module */
