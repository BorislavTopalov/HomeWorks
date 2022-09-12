var n = 8;

for (var i = n - 1; i <= 3 * (n - 1); i += 2) {
    var rows = "";
    for (var j = 1; j <= n; j++) {
        var cols = "";
        cols += i;
        rows += cols;
    }
    console.log(rows);
}
