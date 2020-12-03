'use strict';


function toString(app) {
  return app.name + (" (" + (app.url + ")"));
}

var WebApp = {
  toString: toString
};

var facebook = {
  name: "facebook",
  url: "https://facebook.com"
};

var facebookads = {
  name: "facebook ads",
  url: "https://www.facebook.com/business"
};

var messenger = {
  name: "messenger",
  url: "https://www.facebook.com/messenger"
};

var instagram = {
  name: "instagram",
  url: "https://www.instagram.com"
};

function apps(company) {
  if (typeof company === "string") {
    return "";
  }
  if (company.NAME !== "Facebook") {
    return "";
  }
  switch (company.VAL) {
    case "business" :
        return toString(facebookads);
    case "social" :
        return toString(facebook) + (", " + (toString(messenger) + (", " + toString(instagram))));
    default:
      return "";
  }
}

var Platform = {
  apps: apps
};

console.log("facebook".toUpperCase());

console.log("Business: " + apps({
          NAME: "Facebook",
          VAL: "business"
        }));

console.log("Social: " + apps({
          NAME: "Facebook",
          VAL: "social"
        }));

exports.WebApp = WebApp;
exports.facebook = facebook;
exports.facebookads = facebookads;
exports.messenger = messenger;
exports.instagram = instagram;
exports.Platform = Platform;
/*  Not a pure module */
