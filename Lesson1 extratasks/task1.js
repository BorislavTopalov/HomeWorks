var a = 6;
var b = 8;
var c = 5;

var p = a + b + c;
var s = p/2;
var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));

console.log(p);
console.log(area.toFixed(2));