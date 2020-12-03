'use strict';


function paymentMethodThanks(paymentMethod) {
  if (paymentMethod) {
    return "Thank you for your purchase order # " + paymentMethod._0;
  } else {
    return "Thank you for your cash payment";
  }
}

exports.paymentMethodThanks = paymentMethodThanks;
/* No side effect */
