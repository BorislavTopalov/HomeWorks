var num = 7
var square = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
        if (j % 2 === 0) {
            square += "0";
        } else {
            square += "1";
        }
    }
    square += "\n";
}
console.log(square);