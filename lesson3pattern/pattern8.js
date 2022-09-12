var num = 5;
var square = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
        if (i + j === num - 3 || i + j === num + 1 || i + j === num * 2 || (i % 2 === 0 && j % 2 === 0)) {
            square += "1"
        } else {
            square += "0";
        }
    }
    square += "\n";
}
console.log(square);