var arr = [2, 1, 1, , 3, 3, 2, 2, 2, 1];
var newArray = [];
var newArray2 = [];
var starterValue = arr[0];
var starterIndex = 0;
if (Array.isArray(arr)) {
    for (var i = 1; i < arr.length; i++) {
        if (starterValue !== arr[i]) {
            starterValue = arr[i];
            starterIndex = i;
            newArray2 = [];
            newArray2.push(arr[i]);
        } else {
            var end = i;
            newArray2 = arr.slice(starterIndex, end + 1);           
        }
        if (newArray2.length > newArray.length) {
            newArray = newArray2.slice();
        }
    }
    if (newArray.length > 1) {
        var str = "";
        for( var j = 0; j < newArray.length; j++) {
            str += " " + newArray[j];
        }
        console.log("Максималната редица е:" + str);
    } else {
        console.log("Няма повтарящи се елементи.");
    }
}else {
    console.log("Invalid data");
}
