var num = 5;
var square = "";
var temp = 0;

for (var i = num; i >= 1; i--) {
    for (var j = num; j >= i; j--) {
        square += j;
        temp = j;
    }
    for (var k = num - i + 1; k < num; k++) {
        square += temp;
    }
    square += "\n";
}
console.log(square);

