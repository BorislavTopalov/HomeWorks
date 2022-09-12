var num = 5;
var triangle = "";
var temp = 2;

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
        if (i > 3) {
            triangle += i - temp + 6;
        } else {
            triangle += i;
        }
    }
    temp += 2;
    triangle += "\n";
}
console.log(triangle);