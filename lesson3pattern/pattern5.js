var num = 5;
var square = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
        if (i === Math.floor(num / 2) + 1 && j === Math.floor(num / 2) + 1) {
            square += "0"
        } else {
            square += "1";
        }
    }
    square += "\n";
}
console.log(square);