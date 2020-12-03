'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function appToString(app) {
  return app.name + (" (" + (app.url + ")"));
}

function newSignUp(app) {
  app.numberOfAccounts = app.numberOfAccounts + 1 | 0;
  
}

var facebook = {
  name: "facebook",
  url: "https://facebook.com",
  numberOfAccounts: 10000
};

var facebookads = {
  name: "facebook ads",
  url: "https://www.facebook.com/business",
  numberOfAccounts: 10000
};

var messenger = {
  name: "messenger",
  url: "https://www.facebook.com/messenger",
  numberOfAccounts: 10000
};

var instagram = {
  name: "instagram",
  url: "https://www.instagram.com",
  numberOfAccounts: 10000
};

var googleads = {
  name: "google ads",
  url: "https://ads.google.com",
  numberOfAccounts: 10000
};

var googleplus = {
  name: "google+",
  url: "https://plus.google.com",
  numberOfAccounts: 10000
};

function apps(company) {
  if (typeof company === "string") {
    return /* [] */0;
  }
  var variant = company.NAME;
  if (variant === "Facebook") {
    switch (company.VAL) {
      case "business" :
          return {
                  hd: appToString(facebookads),
                  tl: /* [] */0
                };
      case "social" :
          return {
                  hd: appToString(facebook),
                  tl: {
                    hd: appToString(messenger),
                    tl: {
                      hd: appToString(instagram),
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
                  hd: appToString(googleads),
                  tl: /* [] */0
                };
      case "social" :
          return {
                  hd: appToString(googleplus),
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

console.log("New sign-up on Instagram");

newSignUp(instagram);

console.log("New sign-up on Instagram");

newSignUp(instagram);

console.log(instagram.numberOfAccounts);

exports.appToString = appToString;
exports.newSignUp = newSignUp;
/*  Not a pure module */
