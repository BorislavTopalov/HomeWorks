// Напишете програма, която за дадена матрица намира
// произведението на елементите под главния диагонал.

let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let sum = 0;

if (Array.isArray(arr)) {
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i][i - 1];
    }
    console.log(sum);
} else {
    console.log("Invalid data");
}