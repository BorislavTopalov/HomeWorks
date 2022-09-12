var num = 5;
var triangle = "";

for (var i = 1; i <= num; i++) {
    for (var j = i; j <= num; j++) {
        triangle += i - j + num;
    }
    triangle += "\n";
}
console.log(triangle);