var num = 5;
var square = "";

for (var i = 1; i <= num; i++) {
    for (var j = i; j <= num; j++) {
        square += j;
    }
    for (var k = i - 1; k >= 1; k--) {
        square += k;
    }
    square += "\n";
}
console.log(square);