'use strict';

var Ch05_PolymorphicVariantBasics = require("./Ch05_PolymorphicVariantBasics.bs.js");

function eventToString($$event) {
  var variant = $$event.NAME;
  if (variant === "deviceShake") {
    return "`deviceShake(" + $$event.VAL + ")";
  }
  if (variant === "clickTap") {
    var match = $$event.VAL;
    return "`clickTap(" + match[0] + ", " + match[1] + ")";
  }
  if (variant === "keypress") {
    return "`keypress(" + $$event.VAL + ")";
  }
  if (variant === "accel") {
    return "`accel(" + $$event.VAL + ")";
  }
  var match$1 = $$event.VAL;
  return "`pointerMove(" + match$1[0] + ", " + match$1[1] + ", " + match$1[2] + ", " + match$1[3] + ")";
}

var pressAString = eventToString(Ch05_PolymorphicVariantBasics.pressA);

var angleVal = Ch05_PolymorphicVariantBasics.angle.VAL;

exports.eventToString = eventToString;
exports.pressAString = pressAString;
exports.angleVal = angleVal;
/* pressAString Not a pure module */
