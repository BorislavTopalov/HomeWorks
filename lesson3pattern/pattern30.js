var num = 5;
var triangle = "";

for (var i = num; i >= 1; i--) {
    for (var j = i; j <= num; j++) {
        triangle += j;
    }
    triangle += "\n";
}
console.log(triangle);