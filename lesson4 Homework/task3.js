var num = 1;
var array = [];

array[0] = num;
array[1] = num;
if (typeof num === "number") {
    for (var i = 2; i < 10; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    console.log(array);
} else {
    console.log(num + " is not a number");
}
