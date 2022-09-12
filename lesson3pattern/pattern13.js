var num = 5;
var square = "";

for (var i = 1; i <= num * num; i += num) {
    for (var j = 1; j <= num; j++) {
        square += i + j - 1 + " ";
        if (i < num * 2 + 1) {
            square += " ";
        }
    }
    square += "\n";
}
console.log(square);