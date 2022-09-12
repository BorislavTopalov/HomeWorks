var arr = [1, 2, 3, 4, 5, 6, 7];
var newArr = [];

if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (i === 0) {
                newArr.push(arr[i + 1], arr[i]);
            } else if (i === 2) {
                newArr.push((arr[i] + arr[i + 1]) - arr[i], (arr[i] + arr[i + 1]) - arr[i + 1]);
            } else if (i === 4) {
                newArr.push((arr[i] * arr[i + 1]) / arr[i], (arr[i] * arr[i + 1]) / arr[i + 1]);
            } else if (i === 6) {
                newArr.push(arr[i]);
            }
        } else {
            console.log("Invalid input");
        }
    }
    console.log(newArr);
} else {
    console.log("Invalid data");
}