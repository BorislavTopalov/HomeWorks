var a1 = 9;
var a2 = 8;
var a3 = 10;
var temp = a1;

a1 = (a2 + a1) - a1;
a2 = (a3 + a2) - a2;
a3 = (temp + a3) - a3;


console.log(a1,a2,a3)
