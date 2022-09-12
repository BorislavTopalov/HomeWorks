var arr = [7.1, 8.5, 0.2, 3.7, 0.99, 1.4, -3.5, -110, 212, 341, 1.2];
var newArr = [];

if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] > -2.99 && arr[i] < 2.99) {
                newArr.push(arr[i]);
            } else {
                continue;
            }
        } else {
            console.log("It's not  a number");
        }
    }
    console.log(newArr);
} else {
    console.log("Invalid data");
}