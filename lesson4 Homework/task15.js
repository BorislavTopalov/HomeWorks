var arr = [7.13, 0.2, 4.9, -5.1, 6.34, 1.12];
var newArr = [];

if (Array.isArray(arr)) {
    while (newArr.length < 3) {
        var temp = Math.abs(arr.shift());
        for (i = 0; i < arr.length; i++) {
            if (temp < Math.abs(arr[i])) {
                arr.push(temp);
                break;
            }
            if (i === arr.length - 1) {
                newArr.unshift(temp);
            }
        }
    }
    console.log(newArr);
} else {
    console.log("Invalid data");
}