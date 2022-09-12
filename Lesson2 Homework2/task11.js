var num = 5;
var space = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i + num - 1; j++) {
        if (j + i <= num) {
            space += " ";
        } else {
            space += "*";
        }
    }
    console.log(space);
    space = "";
}