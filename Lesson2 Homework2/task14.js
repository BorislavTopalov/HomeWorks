var n = 200;
var numbers = "";

if (n >= 10 && n <= 200) {
    for (var i = 200; i >= 10; i--) {
        if (i % 7 === 0 && i < n) {
            numbers += i + ", ";
        } else {
            continue;
        }
    }
} else {
    console.log("Invalid input");
}
console.log(numbers);