var num = 6;
var square = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
        if (i + j >= num + 1) {
            square += num
        } else {
            square += i + j - 1;
        }
    }
    square += "\n";
}
console.log(square);