// 1 8 9 16 17
// 2 7 10 15 18
// 3 6 11 14 19
// 4 5 12 13 20

function fromNumToMatrix(row, col) {
    if (typeof row === "number" && typeof col === "number") {
        let rowArr = [];
        for (let r = 0; r < row; r++) {
            let colArr = [];
            let count = r;
            for (let c = 1; c <= col; c++) {
                if (c % 2 === 0) {
                    count = row * c - r;
                    colArr.push(count);
                } else {
                    c === 1 ? count++ : count = colArr[0] + (c - 1) * row;
                    colArr.push(count);
                }
            }
            rowArr.push(colArr);
        }
        return rowArr;
    } else {
        return "Invalid input!";
    }
}
let rows = 4;
let columns = 5;
console.log(fromNumToMatrix(rows, columns));