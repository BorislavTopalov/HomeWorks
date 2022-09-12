var num = 5;
var triangle = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
        if (i % 2 === 0) {
            triangle += "0";
        } else {
            triangle += "1";
        }

    }
    triangle += "\n";
}
console.log(triangle);