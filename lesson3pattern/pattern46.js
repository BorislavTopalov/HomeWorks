var num = 5;
var triangle = "";

for (var i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        for (var j = i; j >= 1; j--) {
            triangle += j;
        }
    } else {
        for (var j = 1; j <= i; j++) {
            triangle += j;
        }
    }
    triangle += "\n";
}
console.log(triangle);