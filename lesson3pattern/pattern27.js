var num = 5;
var triangle = "";

for (var i = num; i >= 1; i--) {
    for (var j = i; j >= 1; j--) {
        triangle += j;
    }
    triangle += "\n";
}
console.log(triangle);