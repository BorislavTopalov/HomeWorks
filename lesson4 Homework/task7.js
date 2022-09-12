var arr = [2, 3, -11, 7,];
var newArr = [];

if (Array.isArray(arr)) {
    arr.push(0);
    newArr.unshift(arr[1]);
    for (var i = 1; i < arr.length - 1; i++) {
        newArr.push(arr[i - 1] + arr[i + 1]);
    }
    console.log(newArr);
} else {
    console.log("Invalid Data");
}