var arr = [2, 3, 7, -5];

if (Array.isArray(arr)) {
    for (var i = arr.length - 1; i >= 0; i--) {
        var temp = arr.splice(i, 1);
        arr.push(temp[0]);
    }
    console.log(arr);
} else {
    console.log("Invalid data");
}
