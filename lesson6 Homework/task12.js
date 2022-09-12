let n = 9;
let arr = [];

function creatingArray(numbers) {
    if (typeof n === "number") {
        for (let i = 1; i <= n; i++) {
            arr.push(i);
        }
        console.log(arr);
    }else {
        console.log("Invalid data");;
    }
}
creatingArray(arr);