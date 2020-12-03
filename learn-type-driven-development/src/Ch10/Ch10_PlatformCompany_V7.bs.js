'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function appToString(app) {
  return app.name + (" (" + (app.url + ")"));
}

function apps(company) {
  if (typeof company === "string") {
    return /* [] */0;
  }
  var variant = company.NAME;
  if (variant === "Facebook") {
    switch (company.VAL) {
      case "business" :
          return {
                  hd: appToString({
                        name: "facebook ads",
                        url: "https://www.facebook.com/business"
                      }),
                  tl: /* [] */0
                };
      case "social" :
          return {
                  hd: appToString({
                        name: "facebook",
                        url: "https://facebook.com"
                      }),
                  tl: {
                    hd: appToString({
                          name: "messenger",
                          url: "https://www.facebook.com/messenger"
                        }),
                    tl: {
                      hd: appToString({
                            name: "instagram",
                            url: "https://www.instagram.com"
                          }),
                      tl: /* [] */0
                    }
                  }
                };
      default:
        return /* [] */0;
    }
  } else {
    if (variant !== "Google") {
      return /* [] */0;
    }
    switch (company.VAL) {
      case "business" :
          return {
                  hd: appToString({
                        name: "google ads",
                        url: "https://ads.google.com"
                      }),
                  tl: /* [] */0
                };
      case "social" :
          return {
                  hd: appToString({
                        name: "google+",
                        url: "https://plus.google.com"
                      }),
                  tl: /* [] */0
                };
      default:
        return /* [] */0;
    }
  }
}

console.log("Facebook");

Pervasives.print_string("Business: ");

console.log($$Array.of_list(apps({
              NAME: "Facebook",
              VAL: "business"
            })));

Pervasives.print_string("Social: ");

console.log($$Array.of_list(apps({
              NAME: "Facebook",
              VAL: "social"
            })));

Pervasives.print_newline(undefined);

console.log("Google");

Pervasives.print_string("Business: ");

console.log($$Array.of_list(apps({
              NAME: "Google",
              VAL: "business"
            })));

Pervasives.print_string("Social: ");

console.log($$Array.of_list(apps({
              NAME: "Google",
              VAL: "social"
            })));

exports.appToString = appToString;
/*  Not a pure module */
