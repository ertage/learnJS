console.log('3e5' + ' ' + 3e5);
console.log('8e-5' + ' ' + 8e-5);
console.log('0/0' + ' ' + 0/0);
console.log(NaN == NaN);
console.log(isFinite(0/0));
console.log(isFinite(Infinity));
console.log(+ '12px');
console.log( + '12' );
console.log(6.35.toFixed(1));

// var numberOne = prompt('enter number', '1');
// var numberTwo = prompt('enter number two' ,'1');

var numberOne = "22", numberTwo = "33";
var summ = parseInt(numberOne) + parseInt(numberTwo);
console.log(summ); 

var i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) {
      console.log( i );
  }
  
}

var getDecimal = function(n) {
    return res = n - Math.floor(n);
}
console.log(getDecimal(12.5));