// Напишете програма, която за дадена матрица от символи
// отпечатва на екрана елементите, които се намират на главния
// диагонал.

let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
let mainDiag = "";

if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
        mainDiag += arr[i][i] + ", ";
    }
    console.log(mainDiag);
} else {
    console.log("Invalid data");
}