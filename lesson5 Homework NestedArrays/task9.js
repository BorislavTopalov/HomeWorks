// Дадена е правоъ­гълна матрица с числа. Да се намери в нея
// максималната подмат­рица с размер 2 х 2 и да се отпечата на
// конзолата. Под максимална подматрица се разбира
// подматрица, която има максимална сума на елементите, които я
// съставят.


let arr = [
    [1, 2, 3, 4, 6],
    [5, 6, 7, 8, 9],
    [9, 10, 11, 12, 7]
];

let maxSum = 0;
let maxRow = 0;
let maxCol = 0;

if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[i].length - 1; j++) {
            if (typeof arr[i][j] === "number") {
                let currentSum = arr[i][j] + arr[i][j + 1]
                    + arr[i + 1][j] + arr[i + 1][j + 1];
                if (currentSum >= maxSum) {
                    maxSum = currentSum;
                    maxRow = i;
                    maxCol = j;
                }
            } else {
                console.log(arr[i][j] + " is not a number");
            }
        }
    }
    console.log(`Maximum sum of the elements is ${maxSum}.
The biggest Matrix is with first point index [${maxRow}][${maxCol}]`);
} else {
    console.log("Invalid data");
}