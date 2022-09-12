var arr = [1, 2, 3, 4, 5, -6, 7];
var sum = 0;

if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            arr[i] = Math.abs(arr[i]);
            sum += arr[i];
        } else {
            console.log("It's not a number");
        }
    }
    console.log("Средна стойност " + sum / i + " , " + "най-близка стойност " + Math.round(sum / i));
} else {
    ("Invalid data");
}