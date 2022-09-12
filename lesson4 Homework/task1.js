var array = [10, 3, 5, "8", 6, -3, 7];
var minNum = array[0];

if (Array.isArray(array)) {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            if (array[i] % 3 === 0) {
                if (array[i] < minNum) {
                    minNum = array[i];
                }
            }
        } else {
            console.log(array[i] + " is not a number");
        }
    }
    console.log("Най-малкото число кратно на 3 е " + minNum);
} else {
    console.log("Invalid data");
}