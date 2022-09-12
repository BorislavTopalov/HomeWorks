var num = 7;
var string = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
        if (i === 1 || j === 1 || i === num || j === num) {
            string += "#" + " ";
        } else {
            string += "  ";
        }
    }
    string += "\n";
}
console.log(string);