var A = 1;
var B = 307;
var res = "";
var sum = 0;

for (var i = A; i <= B; i++) {
    for (var j = i ** 2; j <= B; j++) {
        if (j === i ** 2) {
            if (j % 3 === 0) {
                sum +=j;
                j = "skip" + Math.sqrt(j);
            }
            if(sum > 200){
                break;
            }
            res += j + ", ";
        }
    }
}
console.log(res);



