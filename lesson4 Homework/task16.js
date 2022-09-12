var arr = [-1.12, -2.43, 3.1, 4.2, 0, 6.4, - 7.5, 8.6, 9.1, -4];
var newArr = [];
var sum = 0;
var average = 0;

console.log(arr);
if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] < -0.231) {
                arr[i] = (Math.pow(i + 1, 2) + 41.25);
                newArr.push(arr[i])
            } else {
                arr[i] = (arr[i] * (i + 1));
                newArr.push(arr[i]);
            }
            sum += arr[i];
            average = sum / i;
        } else {
            ("It's not  a number")
        }
    }
    console.log(newArr);
    console.log("Среданата стойност на елементите: " + average);
} else {
    console.log("Invalid data");
}