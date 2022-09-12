var num = 6;
var triangle = "";

for (var i = 2; i <= num; i++) {
    var temp = 0;
    for (var j = 3; j <= i; j++) {
        triangle += j + i - 3;
    }
    for (var k = i - 2; k >= 1; k--) {
        triangle += k * 2 + temp
        temp++;
    }
    triangle += "\n";
}
console.log(triangle);