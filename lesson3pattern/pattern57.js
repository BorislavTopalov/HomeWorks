var num = 5;
var triangle = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
        triangle += j;
    }
    for (var k = i - 1; k >= 1; k--) {
        triangle += k;
    }
    triangle += "\n";
}
for (var i = num; i >= 1; i--) {
    for (var j = 1; j < i; j++) {
        triangle += j;
    }
    for (var k = i - 2; k >= 1; k--) {
        triangle += k;
    }
    triangle += "\n";
}
console.log(triangle);