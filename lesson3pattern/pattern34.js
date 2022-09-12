var num = 5;
var triangle = "";
var temp = num * 2 - 1;

for (var i = 1; i <= temp; i += 2) {
    for (var j = i; j <= temp; j += 2) {
        triangle += j;
    }
    triangle += "\n";
}
console.log(triangle);