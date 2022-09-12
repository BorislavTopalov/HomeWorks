var num1 = 2;
var num2 = 2;
var sum = 0;

if (num1 >= 1 && num1 <= 9) {
    if (num2 >= 1 && num2 <= 9) {
        for (var i = 1; i <= num1; i++) {
            for (var j = 1; j <= num2; j++) {
                sum = j * i;
                console.log(i + " * " + j + " = " + sum);
            }
        }

    } else {
        console.log("Invalid data");
    }
} else {
    console.log("Invalid data");
}