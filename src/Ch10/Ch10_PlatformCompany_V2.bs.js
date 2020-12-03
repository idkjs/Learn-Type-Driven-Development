'use strict';


function apps(company) {
  switch (company.TAG | 0) {
    case /* Facebook */0 :
        switch (company._0) {
          case "business" :
              return "facebook ads";
          case "social" :
              return "facebook, messenger, instagram";
          default:
            return "";
        }
    case /* Google */1 :
        switch (company._0) {
          case "business" :
              return "google ads, google adsense, gmail for business";
          case "social" :
              return "google+, gmail";
          default:
            return "";
        }
    case /* Twitter */2 :
        switch (company._0) {
          case "business" :
              return "twitter ads";
          case "social" :
              return "twitter";
          default:
            return "";
        }
    
  }
}

console.log("facebook".toUpperCase());

console.log("Business: " + apps({
          TAG: /* Facebook */0,
          _0: "business"
        }));

console.log("Social: " + apps({
          TAG: /* Facebook */0,
          _0: "social"
        }));

console.log("google".toUpperCase());

console.log("Business: " + apps({
          TAG: /* Google */1,
          _0: "business"
        }));

console.log("Social: " + apps({
          TAG: /* Google */1,
          _0: "social"
        }));

exports.apps = apps;
/*  Not a pure module */
