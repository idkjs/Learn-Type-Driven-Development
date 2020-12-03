'use strict';


function apps(company) {
  var variant = company.NAME;
  if (variant === "Twitter") {
    switch (company.VAL) {
      case "business" :
          return "twitter ads";
      case "social" :
          return "twitter";
      default:
        return "";
    }
  } else if (variant === "Amazon") {
    switch (company.VAL) {
      case "business" :
          return "amazon, AWS";
      case "social" :
          return "";
      default:
        return "";
    }
  } else if (variant === "Google") {
    switch (company.VAL) {
      case "business" :
          return "google ads, google adsense, gmail for business";
      case "social" :
          return "google+, gmail";
      default:
        return "";
    }
  } else if (variant === "Uber") {
    switch (company.VAL) {
      case "business" :
          return "uber";
      case "social" :
          return "";
      default:
        return "";
    }
  } else {
    switch (company.VAL) {
      case "business" :
          return "facebook ads";
      case "social" :
          return "facebook, messenger, instagram";
      default:
        return "";
    }
  }
}

console.log("facebook".toUpperCase());

console.log("Business: " + apps({
          NAME: "Facebook",
          VAL: "business"
        }));

console.log("Social: " + apps({
          NAME: "Facebook",
          VAL: "social"
        }));

console.log("");

console.log("google".toUpperCase());

console.log("Business: " + apps({
          NAME: "Google",
          VAL: "business"
        }));

console.log("Social: " + apps({
          NAME: "Google",
          VAL: "social"
        }));

console.log("");

console.log("uber".toUpperCase());

console.log("Business: " + apps({
          NAME: "Uber",
          VAL: "business"
        }));

exports.apps = apps;
/*  Not a pure module */
