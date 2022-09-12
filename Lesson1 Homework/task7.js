var hour = 9;
var money = 9;
var isSick = false;

if(isSick) {
    if(money > 0){
        console.log("I'll stay at home and i'll buy medicines.")
    }else{
        console.log("I'll stay at home and i'll drink tea.")
    }
}else{
    if(money < 10){
        console.log("I'll go to coffee shop.")
    }else{
        console.log("I'll go to the disco.")
    }
}