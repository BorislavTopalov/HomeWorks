var num1 = 42;
var num2 = 42;
var nums = "";

if (num1 < num2) {
    for (var i = num1; i <= num2; i++) {
        nums += i + ", ";
    }
} else if (num1 > num2){
    for (var i = num2; i <= num1; i++) {
        nums += i + ", ";
    }
}else {
    nums += num1;
}

    console.log(nums);