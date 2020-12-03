'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");

function appToString(app) {
  return app.name + (" (" + (app.url + ")"));
}

function apps(company) {
  if (typeof company === "string") {
    return "";
  }
  var variant = company.NAME;
  if (variant === "Facebook") {
    switch (company.VAL) {
      case "business" :
          return appToString({
                      name: "facebook ads",
                      url: "https://www.facebook.com/business"
                    });
      case "social" :
          return appToString({
                      name: "facebook",
                      url: "https://facebook.com"
                    }) + (", " + (appToString({
                          name: "messenger",
                          url: "https://www.facebook.com/messenger"
                        }) + (", " + appToString({
                            name: "instagram",
                            url: "https://www.instagram.com"
                          }))));
      default:
        return "";
    }
  } else {
    if (variant !== "Google") {
      return "";
    }
    switch (company.VAL) {
      case "business" :
          return appToString({
                      name: "google ads",
                      url: "https://ads.google.com"
                    });
      case "social" :
          return appToString({
                      name: "google+",
                      url: "https://plus.google.com"
                    });
      default:
        return "";
    }
  }
}

console.log("Facebook");

console.log("Business: " + apps({
          NAME: "Facebook",
          VAL: "business"
        }));

console.log("Social: " + apps({
          NAME: "Facebook",
          VAL: "social"
        }));

Pervasives.print_newline(undefined);

console.log("Google");

console.log("Business: " + apps({
          NAME: "Google",
          VAL: "business"
        }));

console.log("Social: " + apps({
          NAME: "Google",
          VAL: "social"
        }));

exports.appToString = appToString;
/*  Not a pure module */
