var firstNum = 17;
var secNum = 19;
var thirdNum = 140;

console.log(Math.max(firstNum,secNum,thirdNum));
if(firstNum >= secNum && firstNum<= thirdNum){
    console.log(firstNum);
}else if(secNum >= firstNum && secNum <= thirdNum){
    console.log(secNum);
}else{
    console.log(thirdNum);
}
console.log(Math.min(firstNum,secNum,thirdNum));
