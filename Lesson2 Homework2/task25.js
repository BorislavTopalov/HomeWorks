var num = 10;
var i = 1;
var j = i + 1;
var res;

do {
    if (i <= 1) {
        res = i * j;
    } else {
        res = res * j;
    }
    i++;
    j++;
} while (i <= num - 1);
console.log(res);
