var num = 5;
var triangle = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i * 2 - 1; j++) {
        triangle += j;
    }
    triangle += "\n";
}
console.log(triangle);