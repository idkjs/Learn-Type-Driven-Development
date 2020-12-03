'use strict';


function paymentMessage(paymentMethod) {
  if (paymentMethod) {
    return "Paid with PO#" + paymentMethod._0;
  } else {
    return "Paid in cash";
  }
}

var paymentCash = /* Cash */0;

exports.paymentCash = paymentCash;
exports.paymentMessage = paymentMessage;
/* No side effect */
