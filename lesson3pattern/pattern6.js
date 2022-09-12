var num = 5;
var square = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
        if ((i + j) % 2 === 0) {
            square += "1";
        } else {
            square += "0";
        }
    }
    square += "\n";
}
console.log(square);