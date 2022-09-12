var num = 8;
var string = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
        string += "#" + " ";
    }
    string += "\n";
}
console.log(string);