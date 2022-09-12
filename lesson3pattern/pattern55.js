var num = 5;
var triangle = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
        triangle += j;
    }
    triangle += "\n";
}
for (var k = num; k >= 1; k--) {
    for (var m = 1; m < k; m++) {
        triangle += m;
    }
    triangle += "\n";
}
console.log(triangle);