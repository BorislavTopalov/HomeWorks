
// for(i = 1; i == 1; i++){
//     console.log("num")
// }




var n = 5;

for (var i = n - 1; i <= 3 * (n - 1); i++) {
  var rows = "";
  if (n % 2 === 0 && i % 2 !== 0) {
    for (var j = 1; j <= n; j++) {
      var cols = "";
      cols += i;
      rows += cols;
    }
    console.log(rows);
  } else if (n % 2 !== 0 && i % 2 === 0) {
    for (var j = 1; j <= n; j++) {
      var cols = "";
      cols += i;
      rows += cols;
    }
    console.log(rows);
  }
}