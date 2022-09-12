var num = 12345;
var temp = 11111;
var i = num;

while (i >= 1) {
    console.log(i);
    i -= temp;
    temp = Math.floor(temp / 10);
}