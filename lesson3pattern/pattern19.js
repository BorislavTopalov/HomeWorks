var num = 5;
var square = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {

        if (i === 2 && j < num) {
            square += num * 3 + j + " ";
        } else if (i === num) {
            square += num * 3 - 2 - j + 1 + " ";
        } else if (j === 1 && i > 1) {
            square += num * 3 + 3 - i + " ";
        } else if (j === num - 1 && i > 2) {
            square += num * 4 - 3 + i + " ";
        } else if (i === num - 1 && j < num) {
            square += num * 5 - j + " ";
        } else if (i === 3 && j < num) {
            square += num * 5 - 3 + j + " ";
        } else {
            square += i + j - 1 + "  ";
        }
    }
    square += "\n";

}
console.log(square);