var h = 7;
var string = "";

for (var i = 1; i <= h; i++) {
    for (var j = 1; j <= h; j++) {
        if (i % 2 === 0) {
            string += " " + "#";
        } else {
            string += "#" + " ";
        }
    }
    string += "\n";
}
console.log(string);