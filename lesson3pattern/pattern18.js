var num = 5;
var square = "";
var temp = 0;

for (var i = num; i >= 1; i--) {
    for (var j = num; j >= i; j--) {
        square += j + " ";
        temp = j;
    }
    for (var k = num - i + 1; k < num; k++) {
        square += temp + " ";
    }
    for (var n = num - i + 1; n < num; n++) {
        square += temp + " ";
    }
    for (var m = i + 1; m <= num; m++) {
        square += m + " ";
    }
    square += "\n";
}
for (var i = 2; i <= num; i++) {
    for (var j = num; j >= i; j--) {
        square += j + " ";
        temp = j;
    }
    for (var k = num - i + 1; k < num; k++) {
        square += temp + " ";
    }
    for (var n = num - i + 1; n < num; n++) {
        square += temp + " ";
    }
    for (var m = i + 1; m <= num; m++) {
        square += m + " ";
    }
    square += "\n";
}
console.log(square);
