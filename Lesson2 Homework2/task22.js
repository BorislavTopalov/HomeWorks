var num = 60;
var i = 1;
var j = num + 1;
var result = ""
var counter = "";

if (num >= 1 && num <= 999) {
    while (i <= 10) {
        counter += i + ":";
        i++;      
    }
    while (j <= num + 15) {
        if (j % 2 === 0 || j % 3 === 0 || j % 5 === 0) {
            result += j + ", ";
        }
        j++
    }
    console.log(counter);
    console.log(result);
} else {
    console.log("Invalid data!");
}