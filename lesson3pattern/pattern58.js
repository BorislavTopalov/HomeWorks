var num = 5;
var triangle = "";

for (var i = 1; i <= num; i++) {
    var sign = "*";
    for (var j = 1; j <= i; j++) {
        triangle += sign + j;
        sign = "";
    }
    for (var k = i - 1; k >= 1; k--) {
        triangle += k;
    }
    triangle += "\n";
}
for (var l = num; l >= 1; l--) {
    sign = "*";
    for (var m = 1; m < l; m++) {
        triangle += sign + m;
        sign = "";
    }
    for (var n = l - 2; n >= 1; n--) {
        triangle += n;
    }
    triangle += "\n";
}
console.log(triangle);