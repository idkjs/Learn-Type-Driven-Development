'use strict';

var $$String = require("bs-platform/lib/js/string.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

var siteEnvMarker = "TESTING";

function protocol(secured) {
  if (secured) {
    return "https";
  } else {
    return "http";
  }
}

function getInfo(domainName) {
  return "http://" + (domainName + " (TESTING)");
}

var Site = {
  siteEnvMarker: siteEnvMarker,
  protocol: protocol,
  getInfo: getInfo
};

var siteEnvMarker$1 = "production!";

function getPublicInfo(domainName) {
  var additionalText = " (" + ($$String.uppercase_ascii(siteEnvMarker$1) + ")");
  var result = "https://" + (domainName + additionalText);
  console.log(result);
  
}

var ProductionSite = {
  protocol: protocol,
  getInfo: getInfo,
  siteEnvMarker: siteEnvMarker$1,
  getPublicInfo: getPublicInfo
};

console.log(getInfo("dev-acme.com"));

Pervasives.print_newline(undefined);

getPublicInfo("acme.com");

exports.Site = Site;
exports.ProductionSite = ProductionSite;
/*  Not a pure module */
