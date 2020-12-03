'use strict';


function apps(company) {
  switch (company) {
    case /* Facebook */0 :
        return "facebook, messenger, ads";
    case /* Google */1 :
        return "gmail, google+, maps, ads";
    case /* Twitter */2 :
        return "twitter";
    
  }
}

var googleApps = "gmail, google+, maps, ads";

console.log(googleApps);

exports.apps = apps;
exports.googleApps = googleApps;
/*  Not a pure module */
