var num = 5;
var triangle = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
        triangle += j;
    }
    for (var k = i * 2; k <= num * 2 - 1; k++) {
        triangle += " ";
    }
    for (var m = i; m >= 1; m--) {
        triangle += m;
    }
    triangle += "\n";
}
console.log(triangle);