var sum = 26;
var numbers = "";

if (sum >= 2 && sum <= 27) {
    for (var i = 100; i <= 999; i++) {
        var num1 = Math.floor(i / 100) % 10;
        var num2 = Math.floor(i / 10) % 10;
        var num3 = i % 10;
        if (num1 + num2 + num3 === sum) {
            numbers += i + ", "
        } else {
            continue;
        }
    }
} else {
    console.log("Invalid data!");
}
console.log(numbers);