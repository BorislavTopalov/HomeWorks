var num = 9;
var square = "";

for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
        
        if (i === 1 && j > 1 && j < num || i > 1 && i < num && j === 1 
            || j === num && i > 1 && i < num || i === num && j > 1 && j < num ){
            square += "1"
        }else {
            square += "0"
        }
    }
    square += "\n";
}
console.log(square);