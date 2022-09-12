var num = 12345;
var temp =  num % 12346;
var i = num;

while (i >= 1) {
    console.log(i);
    i -= temp;
}