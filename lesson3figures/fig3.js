var tabl = "";

for (var f = 0; f < 1; f++) {
    tabl += "*";
    for (var i = 0; i <= 9; i++) {
        if (i > 0) {
            tabl += i;
        }
        for (var j = 0; j <= 9; j++) {
            if (j > 0 && i > 0) {
                tabl += " " + j * i;
            } else if (i === 0 && j > 0) {
                tabl += " " + j;
            }
        }
        tabl += "\n";
    }
}
console.log(tabl);