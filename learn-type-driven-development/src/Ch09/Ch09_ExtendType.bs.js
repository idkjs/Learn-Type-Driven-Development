'use strict';


function accessTypeName(a) {
  if (a === "Public") {
    return "public";
  } else {
    return "private";
  }
}

function siteSummary(app) {
  var variant = app.NAME;
  if (variant === "Blog") {
    var match = app.VAL;
    var a = match[1];
    var s = match[0].VAL;
    if (a === "Public") {
      return s + " - blog (public - login-based access for authors)";
    } else {
      return s + (" - corporate blog (" + (accessTypeName(a) + ")"));
    }
  }
  if (variant === "CorporateSite") {
    return app.VAL.VAL + " - corporate site (public)";
  }
  var match$1 = app.VAL;
  return match$1[0].VAL + (" - commerce site (" + (accessTypeName(match$1[1]) + ")"));
}

var mysite = {
  NAME: "CorporateSite",
  VAL: {
    NAME: "Domain",
    VAL: "www.acme.com"
  }
};

console.log(siteSummary(mysite));

var myblog = {
  NAME: "Blog",
  VAL: [
    {
      NAME: "Domain",
      VAL: "www.contentgardening.com"
    },
    "Public"
  ]
};

console.log(siteSummary(myblog));

var corpinternalblog = {
  NAME: "Blog",
  VAL: [
    {
      NAME: "Domain",
      VAL: "internalblog.acme.com"
    },
    "Private"
  ]
};

console.log(siteSummary(corpinternalblog));

function appSummary(app) {
  if (app.NAME === "SocialApp") {
    return app.VAL.VAL + " - social app";
  } else {
    return siteSummary(app);
  }
}

console.log("---");

var fb = {
  NAME: "SocialApp",
  VAL: {
    NAME: "Domain",
    VAL: "facebook.com"
  }
};

console.log(appSummary(fb));

function appSummaryImproved(app) {
  if (app.NAME === "SocialApp") {
    return app.VAL.VAL + " - social app";
  } else {
    return siteSummary(app);
  }
}

console.log("------");

console.log(appSummaryImproved(mysite));

console.log(appSummaryImproved(myblog));

console.log(appSummaryImproved(corpinternalblog));

console.log(appSummaryImproved(fb));

exports.accessTypeName = accessTypeName;
exports.siteSummary = siteSummary;
exports.mysite = mysite;
exports.myblog = myblog;
exports.corpinternalblog = corpinternalblog;
exports.appSummary = appSummary;
exports.fb = fb;
exports.appSummaryImproved = appSummaryImproved;
/*  Not a pure module */
