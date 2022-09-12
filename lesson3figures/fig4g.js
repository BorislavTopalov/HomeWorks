var num = 9;
var string = "";

for (var i = 1; i <= num; i++) {
    string += "#" + " ";
}
string += "\n";
for (var j = num - 2; j >= 1; j--) {
    for (var k = 1; k < j + 1; k++) {
        string += "  ";
    }
    string += "#";
    string += "\n";
}
for (var l = 1; l <= num; l++) {
    string += "#" + " ";
}
console.log(string);