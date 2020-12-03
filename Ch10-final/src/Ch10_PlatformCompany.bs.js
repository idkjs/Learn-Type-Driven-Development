// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


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

var google = {
  name: "google",
  url: "https://google.com",
  numberOfAccounts: 10000
};

var gmail = {
  name: "gmail",
  url: "https://google.com/gmail",
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

var Platform = {
  apps: apps
};

exports.appToString = appToString;
exports.newSignUp = newSignUp;
exports.facebook = facebook;
exports.facebookads = facebookads;
exports.messenger = messenger;
exports.instagram = instagram;
exports.google = google;
exports.gmail = gmail;
exports.googleads = googleads;
exports.googleplus = googleplus;
exports.Platform = Platform;
/* No side effect */
