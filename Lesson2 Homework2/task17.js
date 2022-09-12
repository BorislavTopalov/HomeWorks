var num = 10;
var side = ""
var square = "*"

if (num >= 3 && num <= 20) {
   for(var i = 1; i<=num; i++){
    for(var j = 1; j <= num; j++){
        if(i === 1 || i === num || j === 1 || j === num){
            side += "*";
        }else {
            side += "$";
        }
    }
    side += "\n";
   }
   console.log(side);
} else {
    console.log("Invalid data");
}
