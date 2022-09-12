// Напишете програма, която намира най-често срещания елемент
// в масив. Пример: {4, 1, 1, 4, 2, 3,4, 4, 1, 2, 4, 9, 3} => 4 (5 times).

let arr = [4, 1, 1, 4, 4, 4, 2, 3, 1, 1, 2, 4, 9, 3];
let element = arr[0];
let counter = 1;

if (Array.isArray(arr)) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (typeof arr[i] === "number") {
            if (element === arr[i]) {
                counter++;
            }
        } else {
            console.log(arr[i] + " is not a number");
        }
    }
    console.log(`=> ${element} (${counter} times)`);
} else {
    console.log("Invalid data");
}