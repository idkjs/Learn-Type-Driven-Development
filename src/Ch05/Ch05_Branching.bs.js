'use strict';

var $$String = require("bs-platform/lib/js/string.js");

function getAcmeOrder(paymentMethod) {
  if (!paymentMethod) {
    return ;
  }
  var poNumber = paymentMethod._0;
  if ($$String.sub(poNumber, 0, 4) === "ACME") {
    return poNumber;
  }
  
}

function decidePaymentMethod(orderTotal, orderId) {
  if (orderTotal <= 50.0) {
    return /* Cash */0;
  } else {
    return /* PurchaseOrder */{
            _0: "PO-" + orderId
          };
  }
}

exports.getAcmeOrder = getAcmeOrder;
exports.decidePaymentMethod = decidePaymentMethod;
/* No side effect */
