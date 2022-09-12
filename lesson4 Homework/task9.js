var arr = [2, 3, 7, -5, 8];
var newArr = [];

if (Array.isArray(arr)) {
    for (var i = arr.length - 1; i >= 0; i--) {
        var temp = arr.pop();
        newArr.push(temp);
    }
    console.log(newArr);
} else {
    console.log("Inavlid data");
}