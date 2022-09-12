var num = 5;
var string = "";

for (var i = 1; i <= num; i++) {
    for (var k = num; k > i; k--) {
        string += "."
    }
    for (var j = 1; j <= i; j++) {
        string += i + " ";
    }
    string += "\n";
}
console.log(string);