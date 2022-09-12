var num = 5;
var triangle = "";


for (var i = 1; i <= num; i++) {
    var temp = 1;
    for (var j = 1; j <= i; j++) {
        if (j > 1) {
            triangle += i+ temp + " ";
            temp++
        } else {
            triangle += i + j - 1 + " ";

        }

    }
    triangle += "\n";
}
console.log(triangle);