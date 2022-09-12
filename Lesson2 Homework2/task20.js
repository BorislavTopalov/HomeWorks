var res = ""

for (var i = 0; i <= 10; i++) {
    for (var j = i; j <= 9; j++) {
        res += j;
    }
    for(var k = 0; k <= i-1; k++){
        res += k;
    }
    console.log(res);
    res ="";
}
