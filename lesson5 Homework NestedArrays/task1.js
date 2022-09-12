// Напишете програма, която проверява дали в масив от цели
// числа всички числа са неотрицателни.

var arr = [1, 2, 3, 4, 0, -6];
var positive = true;

if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] < 0) {
                positive = false;
                break;
            }
        } else {
            console.log(arr[i] + " is not a number");
        }
    }
    console.log(positive ? "Няма отрицателни числа" : "Има отрицателни числа");
} else {
    console.log("Invalid input");
}