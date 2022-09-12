var num = 5;
var triangle = "";

for (var i = 1; i <= num; i++) {
    var temp = 1;
    for (var j = 1; j <= i; j++) {
        triangle += j + temp;
        temp++;
    }
    for (var k = i - 1; k >= 1; k--) {
        triangle += k * 2;
    }
    triangle += "\n";
}
console.log(triangle);