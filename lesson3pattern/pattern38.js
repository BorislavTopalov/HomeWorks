var num = 6;
var triangle = "";
var h = 0;

for (var i = 1; i <= num; i++) {
    h += 2;
    for (var j = 1; j <= i; j++) {
        if (i === num || j === 1 || i + j === h) {
            triangle += "1";
        } else {
            triangle += "0";
        }
    }
    triangle += "\n";
}
console.log(triangle);