var firstName = "Borislav";
var secName = "Topalov";
var newFirstName = firstName;
firstName = secName;

console.log(firstName,newFirstName);


var firstNum = 54;
var secNum = 68;
var tempNum = firstNum;

firstNum = (secNum + firstNum) - firstNum;
secNum = (tempNum + secNum) - secNum;

console.log(firstNum,secNum);