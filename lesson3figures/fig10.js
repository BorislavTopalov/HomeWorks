var tabl = "";
var num = 5;

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num * 2; j++) {
        tabl += j * i + " ";
    }
    tabl += "\n";
}
console.log(tabl);