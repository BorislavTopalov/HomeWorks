var num = 5;
var triangle = "";

for (var i = 1; i <= num; i++) {
    var temp = 0;
    for (var j = 1; j <= i; j++) {
        if (i % 2 === 0) {
            triangle += j * 2;
        } else if (i === 3 || i === 5) {
            triangle += j + temp;
            temp++;
        } else {
            triangle += j
        }
    }
    triangle += "\n";
}
console.log(triangle);