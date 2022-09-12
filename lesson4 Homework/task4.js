var array = [1, 1, 2];
var mirrored = true;

if (Array.isArray(array)) {
    if (array.length < 2) {
        mirrored = true;
    } else {
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] === "number") {
                var leftElement = array.shift();
                var rightElement = array.pop();
                if (leftElement !== rightElement) {
                    mirrored = false;
                    break;
                }
            } else {
                console.log(array[i] + " is not a number");
            }
        }
    }
    console.log(mirrored ? "The array is mirrored." : "The array is not mirrored.");
} else {
    console.log("Invalid data");
}