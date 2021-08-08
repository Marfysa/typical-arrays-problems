
exports.min = function min (array) {
if (array === [] || array === null){
  return Number(0);
} 
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  let arrLeng = array.length;
  let sum = 0;
 for (let i = 0; i < array.length; i++) {
   sum = sum + array[i];
   
   
 }
  let result = sum / arrLeng;
  return result;
  
}
