let n = 4;
let m = 5;
let matrix = new Array(n);

for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(m);
}
let firstPoint = 1;
let startRow = 0;
let startCol = 0;
let i = 0;
let j = 0;
for (let row = 0; row < n * m; row++) {
    matrix[i][j] = firstPoint;
    firstPoint++;
    i--;
    j++;
    if (i < 0 || j === matrix[i].length) {
        startRow++;
        if (startRow === matrix.length) {
            startRow = matrix.length - 1;
            startCol++;
        } else {
            startCol = 0;
        }
        i = startRow;
        j = startCol;
    }
}
console.log(matrix);