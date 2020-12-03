'use strict';


function makeExn(string) {
  if (string === "") {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "Ch07_DomainTypes.re",
            8,
            4
          ],
          Error: new Error()
        };
  }
  return string;
}

var NonEmptyString = {
  makeExn: makeExn
};

function makeExn$1($$float) {
  if ($$float <= 0) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "Ch07_DomainTypes.re",
            20,
            4
          ],
          Error: new Error()
        };
  }
  return $$float;
}

var PositiveFloat = {
  makeExn: makeExn$1
};

function sendMoney(from, to_, amount) {
  console.log("Send \$" + amount + " from " + from + " to " + to_);
  
}

sendMoney(makeExn("Alice"), makeExn("Bob"), makeExn$1(32));

exports.NonEmptyString = NonEmptyString;
exports.PositiveFloat = PositiveFloat;
exports.sendMoney = sendMoney;
/*  Not a pure module */
