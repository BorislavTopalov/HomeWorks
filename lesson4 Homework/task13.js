var num = 99;
var arr = [];

if (typeof num === "number") {
    if (num >= 0) {
        while (num !== 0) {
            var temp = num % 2;
            num = Math.floor(num / 2);
            arr.push(temp);
        }
        console.log(arr);
    } else {
        console.log("Invalid data");
    }
} else {
    console.log("Invalid data");
}