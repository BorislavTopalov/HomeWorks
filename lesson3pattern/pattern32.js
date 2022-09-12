var num = 5;
var triangle = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
        triangle += j + i - 1;
    }
    triangle += "\n";
}
console.log(triangle);