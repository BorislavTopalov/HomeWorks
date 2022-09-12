var num = 5;
var triangle = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
        if (i === 3) {
            triangle += i + j + "  ";
        } else if (i === 4) {
            triangle += i + j + 2 + "  ";
        } else if (i === 5) {
            triangle += i + j + 5 + " ";
        } else {
            triangle += i + j - 1 + "  ";
        }
    }
    triangle += "\n";
}
console.log(triangle);