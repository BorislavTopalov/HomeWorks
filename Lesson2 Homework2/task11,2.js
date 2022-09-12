var num = 7;
var space = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i + num - 1; j++) {
        if (i === num || i + j === num + 1 || j === i + num -1) {
            space += "*";
        } else {
            space += " ";
        }
    }
    console.log(space);
    space = "";
}