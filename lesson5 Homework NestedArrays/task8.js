// Напишете програма, която за матрица от булеви стойности,
// проверява дали се съдържа елемент със стойност true над
// втория диагонал.

let arr = [
    [false, true, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
];

let isThereTrue = false;

if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[i].length - i - 1; j++) {
            if (typeof arr[i][j] === "boolean") {
                if (arr[i][j] === true) {
                    isThereTrue = true;
                    break;
                }
            } else {
                console.log(arr[i][j] + " is not boolean");
            }
        }
    }
    console.log(isThereTrue ? "There is true" : "There isn't true");
} else {
    console.log("Invalid input");
}