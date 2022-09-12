var number = 12222;
var rem = 0
var final = 0;
var temp = number;

do {
    rem = number % 10;
    number = parseInt(number / 10);
    final = final * 10 + rem;
} while (number > 0)
if (final === temp) {
    console.log("The number is Palindrome");
}
else {
    console.log("The number is not palindrome");
}
