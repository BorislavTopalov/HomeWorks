var arr = [-23, -55, 17, 75, 56, 105, 134];
var counter = "";
var sum = 0;

if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] % 5 === 0) {
                if (arr[i] > 5) {
                    counter += arr[i] + ", ";
                    sum++;
                }
            }
        } else {
            console.log(arr[i] + " is not a number");
        }
    }
    console.log(counter + "-> " + sum + " числа");
} else {
    console.log("Invalid data");
}