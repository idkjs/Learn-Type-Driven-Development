'use strict';

var Ch09_OpenModulebisPart1 = require("./Ch09_OpenModulebisPart1.bs.js");

console.log(Ch09_OpenModulebisPart1.ColorExample.stringOfColor(Ch09_OpenModulebisPart1.ColorExample.onegreen));

console.log(Ch09_OpenModulebisPart1.ColorExample.stringOfRgb(Ch09_OpenModulebisPart1.ColorExample.othergreen));

console.log("String value of another color: " + Ch09_OpenModulebisPart1.ColorExample.stringOfColor("Blue"));

var colorString;

exports.colorString = colorString;
/*  Not a pure module */
