var num = 5;
var triangle = "";

for (var i = 1; i <= num - 1; i++) {
    for (var j = 1; j <= i; j++) {
        triangle += " ";
    }
    triangle += i;
    for (var k = i; k < num; k++) {
        triangle += "  ";
    }
    triangle += i;
    triangle += "\n";
}
for (var l = num; l >= 1; l--) {
    for (var m = 1; m <= l; m++) {
        triangle += " ";
    }
    triangle += l;
    for (var n = num - 1; n >= l; n--) {
        triangle += "  ";
    }
    triangle += l;
    triangle += "\n";
}
console.log(triangle);