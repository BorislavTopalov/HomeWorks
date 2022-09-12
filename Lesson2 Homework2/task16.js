var n = 200;
var m = 600;
var numbers = "";

if (n >= 10 && n < m && m <= 5555) {
    for (var i = 5555; i >= 10; i--) {
        if (i <= m && i >= n && i % 50 === 0) {
            numbers += i + ", ";
        } else {
            continue;
        }
    }
} else {
    console.log("Invalid data");
}
console.log(numbers);