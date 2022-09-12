var num = 12;
var res = num;

if (num >= 10 && num <= 99) {
    while (res > 1) {
        if (res % 2 === 0) {
            res = res / 2;
        } else {
            res = 3 * res + 1
        }
        console.log(res);
    }
} else {
    console.log("Invalid data");
}