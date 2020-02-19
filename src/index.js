
exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length === 0) {
    return 0; 
  }
  return array.sort((prev, next) => prev - next)[0];
}

exports.max = function max (array) {
  if (typeof array === 'undefined' || array.length === 0) {
    return 0; 
  }
  return array.sort((prev, next) => prev - next)[array.length-1];
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length === 0) {
    return 0; 
  }
  return array.reduce((prev, next) => (prev + next), 0) / array.length;
}
