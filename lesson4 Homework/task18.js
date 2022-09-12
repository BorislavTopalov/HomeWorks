var arr = [18, 19, 32, 1, 3, 4, 5, 6, 7, 8];
var arr2 = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11];
var newArr = [];

if (Array.isArray(arr) && Array.isArray(arr2)) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= arr2[i]) {
            newArr[i] = arr[i];
        } else {
            newArr[i] = arr2[i];
        }
    }
    console.log(newArr);
} else {
    console.log("invalid data");
}