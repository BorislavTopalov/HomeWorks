var num = 8;
var string = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num - i; j++) {
        string += " ";
    }
    for (var k = 1; k <= i; k++) {
        string += "#";
    }
    string += "\n";
}
console.log(string);