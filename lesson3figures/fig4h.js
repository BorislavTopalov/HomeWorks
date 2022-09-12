var num = 7;
var string = "";

for (var i = 1; i <= num; i++) {

    for (var j = 1; j <= num - i; j++) {
        string += "  "

    }
    string += "#";
    for (var j = i; j <= num; j++) {
        string += "  "

    }
    string += "#";
    string += "\n";
}
console.log(string);