var arr = [3, 4, 3, 4, 3, 4];
var zigZag = false;

if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] < arr[i + 1]) {
                zigZag = true;
                i++;
            } else {
                zigZag = false;
            }
        } else {
            console.log(arr[i] + " is not a number");
        }
    }
    console.log(zigZag ? "Изпълнява изискванията за зигзагообразна нагоре редица" : "Не изпълнява изискванията");
} else {
    console.log("Invalid data");
}