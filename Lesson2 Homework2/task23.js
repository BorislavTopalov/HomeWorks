var scale = "";
var i = 1;

while (i <= 9) {
    scale = "";
    var j = i;
    while (j <= 9) {
        scale += i + "*" + j + "; ";
        j++;
    }
    console.log(scale)
    i++;
}