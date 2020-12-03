'use strict';


function apps(company) {
  if (typeof company === "string") {
    return "";
  }
  if (company.NAME !== "Facebook") {
    return "";
  }
  switch (company.VAL) {
    case "business" :
        return "facebook ads";
    case "social" :
        return "facebook, messenger, instagram";
    default:
      return "";
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
  url: "https://www.instagram.com/"
};

exports.facebook = facebook;
exports.facebookads = facebookads;
exports.messenger = messenger;
exports.instagram = instagram;
exports.apps = apps;
/*  Not a pure module */
