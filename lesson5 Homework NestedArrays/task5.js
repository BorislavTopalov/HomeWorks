// Напишете програма, която за дадена матрица m x n от числа
// намира реда, в който сумата от елементите е максимална.

let arr = [
    [13, 14, 15, 16],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
    
];
let sum = 0;
let sum2 = 0;
let bigestRow = [];

if (Array.isArray(arr)) {
    for (let row = 0; row < arr.length; row++) {
        for (let i = 0; i < arr[row].length; i++) {
            if (row) {
                sum += arr[row][i];
                sum2 += arr[row + 1][i];
                if (sum2 > sum) {
                    bigestRow.push(arr[row + 1][i]);
                } else {
                    bigestRow.push(arr[row][i]);
                }   
            }
        }
    }
    console.log(sum);
}