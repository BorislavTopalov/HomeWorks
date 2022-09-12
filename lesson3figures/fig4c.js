var num = 8;
var string = "";

for (var i = 1; i <= num; i++) {
    for (var j = i; j >= 1; j--) {
        string += " ";
    }
    for (var k = num; k >= i; k--) {
        string += "#";
    }
    string += "\n";
}
console.log(string);