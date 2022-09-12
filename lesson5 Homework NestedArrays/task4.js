let arr = [1, 0, 1, 0, 0, 1, 1, 0];
let newArr = [];

if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (arr[i] === 0) {
                newArr.unshift(arr[i]);
            } else if (arr[i] === 1) {
                newArr.push(arr[i]);
            } else {
                console.log("Invalid input");
            }
        } else {
            console.log(arr[i] + " is not a number");
        }
    }
    console.log(newArr);
} else {
    console.log("Invalid data");
}