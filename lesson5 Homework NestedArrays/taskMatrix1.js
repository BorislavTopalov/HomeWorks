let n = 4;
let m = 5;
let matrix = new Array(n);

if (typeof n === "number" && typeof m === "number") {
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(m);
    }
    let firstPoint = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matrix[i][j] = firstPoint;
            firstPoint++;
        }
    }
    console.log(matrix);
} else {
    console.log("Invalid input");
}
