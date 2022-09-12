var num = 6;
var square = "";

for (var i = 1; i <= num; i++) {
    for (var j = i; j >= 1; j--) {
        square += j;
    }
    for (var k = i + 1; k <= num; k++) {
        square += k;
    }

    square += "\n";
}
console.log(square);