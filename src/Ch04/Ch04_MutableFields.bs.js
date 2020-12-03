'use strict';


function summarise(array) {
  var result = {
    sum: 0,
    count: array.length,
    mean: 0
  };
  for(var i = 0 ,i_finish = result.count; i < i_finish; ++i){
    result.sum = result.sum + array[i];
  }
  result.mean = result.sum / result.count;
  return result;
}

exports.summarise = summarise;
/* No side effect */
