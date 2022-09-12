var firstNum = 12.4;
var secNum = 11;
var thirdNum = 10;

if (firstNum >= secNum && firstNum > thirdNum && secNum >= thirdNum) {
    console.log(firstNum, secNum, thirdNum);
} else if (firstNum < secNum && firstNum >= thirdNum && secNum > thirdNum) {
    console.log(secNum, firstNum, thirdNum);
} else if (firstNum >= secNum && firstNum < thirdNum && secNum < thirdNum) {
    console.log(thirdNum, firstNum, secNum);
} else if (firstNum >= thirdNum && firstNum > secNum && secNum < thirdNum) {
    console.log(firstNum, thirdNum, secNum);
} else if (firstNum < secNum && firstNum && thirdNum && secNum >= thirdNum) {
    console.log(secNum, thirdNum, firstNum);
} else {
    console.log(thirdNum, secNum, firstNum);
}
